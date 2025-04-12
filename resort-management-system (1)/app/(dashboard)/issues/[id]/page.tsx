"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { api } from "@/lib/api"
import { useAuth } from "@/context/auth-context"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { formatDate, getStatusColor, hasRole } from "@/lib/utils"
import { AlertTriangle, CheckSquare, ImageIcon, MessageSquare, Upload } from "lucide-react"

interface Issue {
  id: number
  inspection_id: number
  title: string
  description: string
  priority: string
  status: string
  raised_by: number
  created_at: string
  updated_at: string
}

interface Comment {
  id: number
  issue_id: number
  user_id: number
  user_name: string
  comment: string
  created_at: string
}

interface Media {
  id: number
  issue_id: number
  file_url: string
  media_type: string
  uploaded_by: number
  uploaded_by_name: string
  created_at: string
}

export default function IssuePage() {
  const { id } = useParams()
  const { user } = useAuth()
  const { toast } = useToast()
  const [issue, setIssue] = useState<Issue | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [media, setMedia] = useState<Media[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [newComment, setNewComment] = useState("")
  const [isSubmittingComment, setIsSubmittingComment] = useState(false)

  // Fetch issue details
  useEffect(() => {
    const fetchIssueDetails = async () => {
      try {
        setIsLoading(true)

        // Fetch issue
        const issueResponse = await api.get(`/issues/${id}`)
        setIssue(issueResponse.data)

        // Fetch comments
        const commentsResponse = await api.get("/comments", {
          params: { issue_id: id, per_page: 100 },
        })
        setComments(commentsResponse.data.comments)

        // Fetch media
        const mediaResponse = await api.get("/media", {
          params: { issue_id: id, per_page: 100 },
        })
        setMedia(mediaResponse.data.media)
      } catch (error) {
        console.error("Error fetching issue details:", error)
        toast({
          title: "Error",
          description: "Failed to load issue details. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    if (user && id) {
      fetchIssueDetails()
    }
  }, [user, id, toast])

  const handleSubmitComment = async () => {
    if (!newComment.trim()) return

    try {
      setIsSubmittingComment(true)

      const response = await api.post("/comments", {
        issue_id: Number(id),
        comment: newComment,
      })

      // Add the new comment to the list
      setComments([
        ...comments,
        {
          ...response.data,
          user_name: user?.full_name || "Unknown",
          created_at: new Date().toISOString(),
        },
      ])

      // Clear the input
      setNewComment("")

      toast({
        title: "Comment added",
        description: "Your comment has been added successfully.",
      })
    } catch (error) {
      console.error("Error adding comment:", error)
      toast({
        title: "Error",
        description: "Failed to add comment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmittingComment(false)
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="grid gap-6">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    )
  }

  if (!issue) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <AlertTriangle className="h-12 w-12 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold mb-2">Issue Not Found</h2>
        <p className="text-muted-foreground">
          The issue you're looking for doesn't exist or you don't have permission to view it.
        </p>
        <Button className="mt-6" variant="outline" asChild>
          <a href="/issues">Back to Issues</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{issue.title}</h1>
          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <span>Issue #{issue.id}</span>
            <span>•</span>
            <span>Reported on {formatDate(issue.created_at)}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {hasRole(user?.role, ["inspector", "maintainer"]) && (
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload Media
            </Button>
          )}
          {hasRole(user?.role, ["manager"]) && (
            <Button>
              <CheckSquare className="mr-2 h-4 w-4" />
              Create Task
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Description</h2>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={getStatusColor(issue.priority)}>
                  {issue.priority}
                </Badge>
                <Badge variant="outline" className={getStatusColor(issue.status)}>
                  {issue.status}
                </Badge>
              </div>
            </div>
            <p className="text-muted-foreground whitespace-pre-line">{issue.description}</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Media</h2>
              <span className="text-sm text-muted-foreground">
                {media.length} {media.length === 1 ? "file" : "files"}
              </span>
            </div>

            {media.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 border border-dashed rounded-lg">
                <ImageIcon className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No media files uploaded yet</p>
                {hasRole(user?.role, ["inspector", "maintainer"]) && (
                  <Button variant="outline" className="mt-4">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Media
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {media.map((item) => (
                  <div key={item.id} className="border rounded-lg overflow-hidden">
                    <img
                      src={item.file_url || "/placeholder.svg"}
                      alt={`Media for issue #${issue.id}`}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="p-2 text-xs text-muted-foreground">Uploaded by {item.uploaded_by_name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Comments</h2>
              <span className="text-sm text-muted-foreground">
                {comments.length} {comments.length === 1 ? "comment" : "comments"}
              </span>
            </div>

            <div className="space-y-4">
              {comments.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 border border-dashed rounded-lg">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No comments yet</p>
                </div>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{comment.user_name}</span>
                      <span className="text-xs text-muted-foreground">{formatDate(comment.created_at)}</span>
                    </div>
                    <p className="text-sm whitespace-pre-line">{comment.comment}</p>
                  </div>
                ))
              )}

              <div className="space-y-2">
                <Textarea
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={3}
                />
                <Button onClick={handleSubmitComment} disabled={!newComment.trim() || isSubmittingComment}>
                  {isSubmittingComment ? "Submitting..." : "Add Comment"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-4">Issue Details</h3>
            <dl className="space-y-2">
              <div className="grid grid-cols-2 gap-1">
                <dt className="text-sm text-muted-foreground">Status</dt>
                <dd>
                  <Badge variant="outline" className={getStatusColor(issue.status)}>
                    {issue.status}
                  </Badge>
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <dt className="text-sm text-muted-foreground">Priority</dt>
                <dd>
                  <Badge variant="outline" className={getStatusColor(issue.priority)}>
                    {issue.priority}
                  </Badge>
                </dd>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <dt className="text-sm text-muted-foreground">Reported By</dt>
                <dd className="text-sm">User #{issue.raised_by}</dd>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <dt className="text-sm text-muted-foreground">Reported On</dt>
                <dd className="text-sm">{formatDate(issue.created_at)}</dd>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <dt className="text-sm text-muted-foreground">Last Updated</dt>
                <dd className="text-sm">{formatDate(issue.updated_at)}</dd>
              </div>
            </dl>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-4">Related Tasks</h3>
            <div className="flex flex-col items-center justify-center py-4">
              <CheckSquare className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">No tasks assigned yet</p>
              {hasRole(user?.role, ["manager"]) && (
                <Button variant="outline" size="sm" className="mt-4">
                  <CheckSquare className="mr-2 h-4 w-4" />
                  Create Task
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
