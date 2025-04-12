"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
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
import { CheckSquare, Eye } from "lucide-react"

interface Task {
  id: number
  issue_id: number
  assigned_to: number
  assigned_to_name: string
  description: string
  status: string
  due_date: string
  created_at: string
}

export default function TasksPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [pageCount, setPageCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [assignedToFilter, setAssignedToFilter] = useState<string>("all")

  // Check if user has admin, manager, or maintainer role
  useEffect(() => {
    if (user && !hasRole(user.role, ["admin", "manager", "maintainer"])) {
      toast({
        title: "Access denied",
        description: "You don't have permission to access this page.",
        variant: "destructive",
      })
      router.push("/dashboard")
    }
  }, [user, router, toast])

  // Fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true)
        const params: Record<string, any> = {
          page: pageIndex + 1, // API uses 1-based indexing
          per_page: pageSize,
        }

        // If maintainer, only show their tasks
        if (user?.role === "maintainer") {
          params.assigned_to = user.id
        } else if (assignedToFilter !== "all") {
          params.assigned_to = assignedToFilter
        }

        const response = await api.get("/tasks", { params })

        setTasks(response.data.tasks)
        setTotal(response.data.total)
        setPageCount(Math.ceil(response.data.total / pageSize))
      } catch (error) {
        console.error("Error fetching tasks:", error)
        toast({
          title: "Error",
          description: "Failed to load tasks. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    if (user && hasRole(user.role, ["admin", "manager", "maintainer"])) {
      fetchTasks()
    }
  }, [user, pageIndex, pageSize, assignedToFilter, toast])

  const handlePaginationChange = (newPageIndex: number, newPageSize: number) => {
    setPageIndex(newPageIndex)
    setPageSize(newPageSize)
  }

  const columns: ColumnDef<Task>[] = [
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => {
        const description = row.getValue("description") as string
        return <div className="max-w-md truncate font-medium">{description}</div>
      },
    },
    {
      accessorKey: "issue_id",
      header: "Issue",
      cell: ({ row }) => {
        const issueId = row.getValue("issue_id") as number
        return (
          <Link href={`/issues/${issueId}`} className="text-primary hover:underline">
            Issue #{issueId}
          </Link>
        )
      },
    },
    {
      accessorKey: "assigned_to_name",
      header: "Assigned To",
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
      accessorKey: "due_date",
      header: "Due Date",
      cell: ({ row }) => {
        const date = row.getValue("due_date") as string
        return <div>{formatDate(date)}</div>
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const task = row.original

        return (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href={`/issues/${task.issue_id}`}>
                <Eye className="h-4 w-4" />
                <span className="sr-only">View Issue</span>
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
          <h1 className="text-2xl font-bold">Tasks</h1>
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
        <h1 className="text-2xl font-bold">Tasks</h1>
        {hasRole(user?.role, ["admin", "manager"]) && (
          <Button>
            <CheckSquare className="mr-2 h-4 w-4" />
            Create Task
          </Button>
        )}
      </div>

      {hasRole(user?.role, ["admin", "manager"]) && (
        <div className="flex items-center gap-2">
          <Select value={assignedToFilter} onValueChange={setAssignedToFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by assignee" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Assignees</SelectItem>
              {/* This would typically be populated with users */}
              <SelectItem value="1">User #1</SelectItem>
              <SelectItem value="2">User #2</SelectItem>
              <SelectItem value="3">User #3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <DataTable
        columns={columns}
        data={tasks}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageSize={pageSize}
        onPaginationChange={handlePaginationChange}
      />
    </div>
  )
}
