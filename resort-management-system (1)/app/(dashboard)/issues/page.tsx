"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { api } from "@/lib/api"
import { useAuth } from "@/context/auth-context"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { formatDate, getStatusColor, hasRole } from "@/lib/utils"
import type { ColumnDef } from "@tanstack/react-table"
import { AlertTriangle, Eye } from "lucide-react"

interface Issue {
  id: number
  inspection_id: number
  title: string
  description: string
  priority: string
  status: string
  raised_by: number
  created_at: string
}

export default function IssuesPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [issues, setIssues] = useState<Issue[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [pageCount, setPageCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [statusFilter, setStatusFilter] = useState<string>("all")

  // Fetch issues
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        setIsLoading(true)
        const params: Record<string, any> = {
          page: pageIndex + 1, // API uses 1-based indexing
          per_page: pageSize,
        }

        if (statusFilter !== "all") {
          params.status = statusFilter
        }

        const response = await api.get("/issues", { params })

        setIssues(response.data.issues)
        setTotal(response.data.total)
        setPageCount(Math.ceil(response.data.total / pageSize))
      } catch (error) {
        console.error("Error fetching issues:", error)
        toast({
          title: "Error",
          description: "Failed to load issues. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    if (user) {
      fetchIssues()
    }
  }, [user, pageIndex, pageSize, statusFilter, toast])

  const handlePaginationChange = (newPageIndex: number, newPageSize: number) => {
    setPageIndex(newPageIndex)
    setPageSize(newPageSize)
  }

  const columns: ColumnDef<Issue>[] = [
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => {
        const id = row.original.id
        const title = row.getValue("title") as string

        return (
          <Link href={`/issues/${id}`} className="font-medium hover:underline">
            {title}
          </Link>
        )
      },
    },
    {
      accessorKey: "priority",
      header: "Priority",
      cell: ({ row }) => {
        const priority = row.getValue("priority") as string
        return (
          <Badge variant="outline" className={getStatusColor(priority)}>
            {priority}
          </Badge>
        )
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <Badge variant="outline" className={getStatusColor(status)}>
            {status}
          </Badge>
        )
      },
    },
    {
      accessorKey: "created_at",
      header: "Reported On",
      cell: ({ row }) => {
        const date = row.original.created_at
        return <div>{formatDate(date)}</div>
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const issue = row.original

        return (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href={`/issues/${issue.id}`}>
                <Eye className="h-4 w-4" />
                <span className="sr-only">View</span>
              </Link>
            </Button>
          </div>
        )
      },
    },
  ]

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Issues</h1>
          <Skeleton className="h-10 w-24" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-32" />
        </div>
        <Skeleton className="h-[500px] w-full" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Issues</h1>
        {hasRole(user?.role, ["admin", "manager", "inspector"]) && (
          <Button>
            <AlertTriangle className="mr-2 h-4 w-4" />
            Report Issue
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in_progress">In Progress</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable
        columns={columns}
        data={issues}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageSize={pageSize}
        onPaginationChange={handlePaginationChange}
      />
    </div>
  )
}
