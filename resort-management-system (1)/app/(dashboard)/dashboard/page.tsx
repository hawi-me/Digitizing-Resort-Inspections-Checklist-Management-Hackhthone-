"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/context/auth-context"
import { api } from "@/lib/api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { hasRole } from "@/lib/utils"
import { AlertTriangle, CheckSquare, ClipboardList, FileCheck, Home } from "lucide-react"

export default function DashboardPage() {
  const { user } = useAuth()
  const [stats, setStats] = useState<{
    resorts?: number
    checklists?: number
    inspections?: number
    openIssues?: number
    pendingTasks?: number
  }>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true)

        // Fetch stats based on user role
        const statsData: Record<string, number> = {}

        // All users can see issues
        const issuesResponse = await api.get("/issues", { params: { status: "open", per_page: 1 } })
        statsData.openIssues = issuesResponse.data.total

        // Admin and managers can see resorts
        if (hasRole(user?.role, ["admin", "manager"])) {
          const resortsResponse = await api.get("/resorts", { params: { per_page: 1 } })
          statsData.resorts = resortsResponse.data.total
        }

        // Admin, managers, and inspectors can see checklists
        if (hasRole(user?.role, ["admin", "manager", "inspector"])) {
          const checklistsResponse = await api.get("/checklists", { params: { per_page: 1 } })
          statsData.checklists = checklistsResponse.data.total
        }

        // Admin, managers, and inspectors can see inspections
        if (hasRole(user?.role, ["admin", "manager", "inspector"])) {
          const inspectionsResponse = await api.get("/inspections", { params: { per_page: 1 } })
          statsData.inspections = inspectionsResponse.data.total
        }

        // Admin, managers, and maintainers can see tasks
        if (hasRole(user?.role, ["admin", "manager", "maintainer"])) {
          const tasksResponse = await api.get("/tasks", { params: { status: "pending", per_page: 1 } })
          statsData.pendingTasks = tasksResponse.data.total
        }

        setStats(statsData)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (user) {
      fetchDashboardData()
    }
  }, [user])

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-32 w-full" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Welcome back, <span className="font-medium">{user?.full_name}</span>
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {hasRole(user?.role, ["admin", "manager"]) && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Resorts</CardTitle>
              <Home className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.resorts || 0}</div>
              <p className="text-xs text-muted-foreground">Managed properties in the system</p>
            </CardContent>
          </Card>
        )}

        {hasRole(user?.role, ["admin", "manager", "inspector"]) && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Checklists</CardTitle>
              <ClipboardList className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.checklists || 0}</div>
              <p className="text-xs text-muted-foreground">Active inspection checklists</p>
            </CardContent>
          </Card>
        )}

        {hasRole(user?.role, ["admin", "manager", "inspector"]) && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inspections</CardTitle>
              <FileCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.inspections || 0}</div>
              <p className="text-xs text-muted-foreground">Total inspections conducted</p>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.openIssues || 0}</div>
            <p className="text-xs text-muted-foreground">Issues requiring attention</p>
          </CardContent>
        </Card>

        {hasRole(user?.role, ["admin", "manager", "maintainer"]) && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
              <CheckSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingTasks || 0}</div>
              <p className="text-xs text-muted-foreground">Tasks awaiting completion</p>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks based on your role</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hasRole(user?.role, ["inspector", "manager"]) && (
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Create Inspection</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                  Start a new inspection using a checklist
                </CardContent>
              </Card>
            )}

            {hasRole(user?.role, ["inspector", "manager"]) && (
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Report Issue</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                  Report a new issue from an inspection
                </CardContent>
              </Card>
            )}

            {hasRole(user?.role, ["manager"]) && (
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Assign Task</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
                  Create and assign tasks to maintainers
                </CardContent>
              </Card>
            )}

            {hasRole(user?.role, ["maintainer"]) && (
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">View My Tasks</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm text-muted-foreground">See tasks assigned to you</CardContent>
              </Card>
            )}

            {hasRole(user?.role, ["admin"]) && (
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Manage Users</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm text-muted-foreground">Add or edit system users</CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
