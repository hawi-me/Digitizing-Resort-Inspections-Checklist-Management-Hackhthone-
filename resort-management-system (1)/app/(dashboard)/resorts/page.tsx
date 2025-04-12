"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { api } from "@/lib/api"
import { useAuth } from "@/context/auth-context"
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Skeleton } from "@/components/ui/skeleton"
import { hasRole } from "@/lib/utils"
import type { ColumnDef } from "@tanstack/react-table"
import { Plus, Edit, Trash } from "lucide-react"

interface Resort {
  id: number
  name: string
  location: string
  description: string
}

export default function ResortsPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [resorts, setResorts] = useState<Resort[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [pageCount, setPageCount] = useState(0)
  const [total, setTotal] = useState(0)

  // Check if user has admin or manager role
  useEffect(() => {
    if (user && !hasRole(user.role, ["admin", "manager"])) {
      toast({
        title: "Access denied",
        description: "You don't have permission to access this page.",
        variant: "destructive",
      })
      router.push("/dashboard")
    }
  }, [user, router, toast])

  // Fetch resorts
  useEffect(() => {
    const fetchResorts = async () => {
      try {
        setIsLoading(true)
        const response = await api.get("/resorts", {
          params: {
            page: pageIndex + 1, // API uses 1-based indexing
            per_page: pageSize,
          },
        })

        setResorts(response.data.resorts)
        setTotal(response.data.total)
        setPageCount(Math.ceil(response.data.total / pageSize))
      } catch (error) {
        console.error("Error fetching resorts:", error)
        toast({
          title: "Error",
          description: "Failed to load resorts. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    if (user && hasRole(user.role, ["admin", "manager"])) {
      fetchResorts()
    }
  }, [user, pageIndex, pageSize, toast])

  const handlePaginationChange = (newPageIndex: number, newPageSize: number) => {
    setPageIndex(newPageIndex)
    setPageSize(newPageSize)
  }

  const columns: ColumnDef<Resort>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => <div>{row.getValue("location") || "—"}</div>,
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
        const resort = row.original

        return (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Edit className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            {hasRole(user?.role, ["admin"]) && (
              <Button variant="ghost" size="icon">
                <Trash className="h-4 w-4" />
                <span className="sr-only">Delete</span>
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
          <h1 className="text-2xl font-bold">Resorts</h1>
          <Skeleton className="h-10 w-24" />
        </div>
        <Skeleton className="h-[500px] w-full" />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Resorts</h1>
        {hasRole(user?.role, ["admin"]) && (
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Resort
          </Button>
        )}
      </div>

      <DataTable
        columns={columns}
        data={resorts}
        pageCount={pageCount}
        pageIndex={pageIndex}
        pageSize={pageSize}
        onPaginationChange={handlePaginationChange}
      />
    </div>
  )
}
