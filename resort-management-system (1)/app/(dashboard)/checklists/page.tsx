"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { api } from "@/lib/api"
import { useAuth } from "@/context/auth-context"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { formatSnakeCase, hasRole } from "@/lib/utils"
import type { ColumnDef } from "@tanstack/react-table"
import { ClipboardList, Edit, FileCheck } from "lucide-react"

interface Checklist {
  id: number
  resort_id: number
  resort_name: string
  category: string
  title: string
  description: string
}

export default function ChecklistsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [checklists, setChecklists] = useState<Checklist[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [pageCount, setPageCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  // Check if user has admin, manager, or inspector role
  useEffect(() => {
    if (user && !hasRole(user.role, ["admin", "manager", "inspector"])) {
      toast({
        title: "Access denied",
        description: "You don't have permission to access this page.",
        variant: "destructive",
      })
      router.push("/dashboard")
    }
  }, [user, router, toast])

  // Fetch checklists
  useEffect(() => {
    const fetchChecklists = async () => {
      try {
        setIsLoading(true)
        const params: Record<string, any> = {
          page: pageIndex + 1, // API uses 1-based indexing
          per_page: pageSize,
        }

        if (categoryFilter !== "all") {
          params.category = categoryFilter
        }

        const response = await api.get("/checklists", { params })

        setChecklists(response.data.checklists)
        setTotal(response.data.total)
        setPageCount(Math.ceil(response.data.total / pageSize))
      } catch (error) {
        console.error("Error fetching checklists:", error)
        toast({
          title: "Error",
          description: "Failed to load checklists. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    if (user && hasRole(user.role, ["admin", "manager", "inspector"])) {
      fetchChecklists()
    }
  }, [user, pageIndex, pageSize, categoryFilter, toast])

  const handlePaginationChange = (newPageIndex: number, newPageSize: number) => {
    setPageIndex(newPageIndex)
    setPageSize(newPageSize)
  }

  const columns: ColumnDef<Checklist>[] = [
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => {
        const category = row.getValue("category") as string
        return <div>{formatSnakeCase(category)}</div>
      },
    },
    {
      accessorKey: "resort_name",
      header: "Resort",
      cell: ({ row }) => <div>{row.getValue("resort_name") || "All Resorts"}</div>,
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => {
        const description = row.getValue("description") as string
        return <div className="max-w-md truncate">{description || "—"}</div>
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const checklist = row.original

        return (
          <div className="flex items-center gap-2">
            {hasRole(user?.role, ["inspector", "manager"]) && (
              <Button variant="ghost" size="icon">
                <FileCheck className="h-4 w-4" />
                <span className="sr-only">Start Inspection</span>
              </Button>
            )}
            {hasRole(user?.role, ["admin", "manager"]) && (
              <Button variant="ghost" size="icon">
                <Edit className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
            )}
          </div>
        )
      },
    },
  ]

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Checklists</h1>
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
        <h1 className="text-2xl font-bold">Checklists</h1>
        {hasRole(user?.role, ["admin", "manager"]) && (
          <Button>
            <ClipboardList className="mr-2 h-4 w-4" />
            New Checklist
          </Button>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="safety">Safety</SelectItem>
            <SelectItem value="maintenance">Maintenance</SelectItem>
            <SelectItem value="housekeeping">Housekeeping</SelectItem>
            <SelectItem value="amenities">Amenities</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DataTable
        columns={columns}
        data={checklists}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageSize={pageSize}
        onPaginationChange={handlePaginationChange}
      />
    </div>
  )
}
