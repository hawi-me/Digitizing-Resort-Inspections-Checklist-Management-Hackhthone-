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
import { Badge } from "@/components/ui/badge"
import { formatDate, getStatusColor, hasRole } from "@/lib/utils"
import type { ColumnDef } from "@tanstack/react-table"
import { AlertTriangle, Eye, FileCheck } from "lucide-react"

interface Inspection {
  id: number
  checklist_id: number
  checklist_title: string
  inspector_id: number
  inspector_name: string
  inspection_date: string
  notes: string
  status: string
  issues_count: number
}

export default function InspectionsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [inspections, setInspections] = useState<Inspection[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [pageCount, setPageCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [inspectorFilter, setInspectorFilter] = useState<string>("all")

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

  // Fetch inspections
  useEffect(() => {
    const fetchInspections = async () => {
      try {
        setIsLoading(true)
        const params: Record<string, any> = {
          page: pageIndex + 1, // API uses 1-based indexing
          per_page: pageSize,
        }

        // If inspector, only show their inspections
        if (user?.role === "inspector") {
          params.inspector_id = user.id
        } else if (inspectorFilter !== "all") {
          params.inspector_id = inspectorFilter
        }

        const response = await api.get("/inspections", { params })

        setInspections(response.data.inspections)
        setTotal(response.data.total)
        setPageCount(Math.ceil(response.data.total / pageSize))
      } catch (error) {
        console.error("Error fetching inspections:", error)
        toast({
          title: "Error",
          description: "Failed to load inspections. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    if (user && hasRole(user.role, ["admin", "manager", "inspector"])) {
      fetchInspections()
    }
  }, [user, pageIndex, pageSize, inspectorFilter, toast])

  const handlePaginationChange = (newPageIndex: number, newPageSize: number) => {
    setPageIndex(newPageIndex)
    setPageSize(newPageSize)
  }

  const columns: ColumnDef<Inspection>[] = [
    {
      accessorKey: "checklist_title",
      header: "Checklist",
    },
    {
      accessorKey: "inspector_name",
      header: "Inspector",
    },
    {
      accessorKey: "inspection_date",
      header: "Date",
      cell: ({ row }) => {
        const date = row.getValue("inspection_date") as string
        return <div>{formatDate(date)}</div>
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
      accessorKey: "issues_count",
      header: "Issues",
      cell: ({ row }) => {
        const count = row.getValue("issues_count") as number
        return (
          <div className="flex items-center gap-1">
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            <span>{count}</span>
          </div>
        )
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const inspection = row.original

        return (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Eye className="h-4 w-4" />
              <span className="sr-only">View</span>
            </Button>
            {hasRole(user?.role, ["inspector", "manager"]) && (
              <Button variant="ghost" size="icon">
                <AlertTriangle className="h-4 w-4" />
                <span className="sr-only">Report Issue</span>
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
          <h1 className="text-2xl font-bold">Inspections</h1>
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
        <h1 className="text-2xl font-bold">Inspections</h1>
        {hasRole(user?.role, ["inspector", "manager"]) && (
          <Button>
            <FileCheck className="mr-2 h-4 w-4" />
            New Inspection
          </Button>
        )}
      </div>

      {hasRole(user?.role, ["admin", "manager"]) && (
        <div className="flex items-center gap-2">
          <Select value={inspectorFilter} onValueChange={setInspectorFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by inspector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Inspectors</SelectItem>
              {/* This would typically be populated with inspectors */}
              <SelectItem value="1">Inspector #1</SelectItem>
              <SelectItem value="2">Inspector #2</SelectItem>
              <SelectItem value="3">Inspector #3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <DataTable
        columns={columns}
        data={inspections}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageSize={pageSize}
        onPaginationChange={handlePaginationChange}
      />
    </div>
  )
}
