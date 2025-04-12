"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { hasRole } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  Home,
  ClipboardList,
  FileCheck,
  AlertTriangle,
  CheckSquare,
  LogOut,
  Menu,
  X,
} from "lucide-react"

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  active: boolean
  onClick?: () => void
}

function NavItem({ href, icon, label, active, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
        active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, logout, isLoading } = useAuth()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1">
          <aside className="hidden w-64 border-r bg-muted/40 lg:block">
            <div className="flex h-full flex-col gap-2 p-4">
              <Skeleton className="h-8 w-40" />
              <div className="space-y-1 mt-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-full" />
                ))}
              </div>
            </div>
          </aside>
          <main className="flex-1 p-6">
            <Skeleton className="h-8 w-64 mb-6" />
            <Skeleton className="h-[500px] w-full rounded-lg" />
          </main>
        </div>
      </div>
    )
  }

  const navItems = [
    {
      href: "/dashboard",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      roles: ["admin", "manager", "inspector", "maintainer"],
    },
    {
      href: "/users",
      icon: <Users size={20} />,
      label: "Users",
      roles: ["admin"],
    },
    {
      href: "/resorts",
      icon: <Home size={20} />,
      label: "Resorts",
      roles: ["admin", "manager"],
    },
    {
      href: "/checklists",
      icon: <ClipboardList size={20} />,
      label: "Checklists",
      roles: ["admin", "manager", "inspector"],
    },
    {
      href: "/inspections",
      icon: <FileCheck size={20} />,
      label: "Inspections",
      roles: ["admin", "manager", "inspector"],
    },
    {
      href: "/issues",
      icon: <AlertTriangle size={20} />,
      label: "Issues",
      roles: ["admin", "manager", "inspector", "maintainer"],
    },
    {
      href: "/tasks",
      icon: <CheckSquare size={20} />,
      label: "Tasks",
      roles: ["admin", "manager", "maintainer"],
    },
  ]

  const filteredNavItems = navItems.filter((item) => hasRole(user?.role, item.roles))

  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile header */}
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="sr-only">Toggle menu</span>
        </Button>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Resort Management</h1>
        </div>
        <Button variant="ghost" size="icon" onClick={logout}>
          <LogOut size={20} />
          <span className="sr-only">Log out</span>
        </Button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar for desktop */}
        <aside className="hidden w-64 border-r bg-muted/40 lg:block">
          <div className="flex h-full flex-col gap-4 p-4">
            <div className="flex items-center gap-2 px-2">
              <Home className="h-6 w-6" />
              <h2 className="text-lg font-semibold">Resort Management</h2>
            </div>
            <div className="flex-1 py-2">
              <nav className="grid gap-1">
                {filteredNavItems.map((item) => (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    icon={item.icon}
                    label={item.label}
                    active={pathname === item.href}
                  />
                ))}
              </nav>
            </div>
            <div className="border-t pt-4">
              {user && (
                <div className="mb-2 flex items-center gap-2 px-2">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Users size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{user.full_name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
                  </div>
                </div>
              )}
              <Button variant="outline" className="w-full justify-start gap-2" onClick={logout}>
                <LogOut size={16} />
                <span>Log out</span>
              </Button>
            </div>
          </div>
        </aside>

        {/* Mobile sidebar */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
            <nav className="fixed left-0 top-0 bottom-0 w-3/4 border-r bg-background p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-8">
                <Home className="h-6 w-6" />
                <h2 className="text-lg font-semibold">Resort Management</h2>
              </div>
              <div className="grid gap-1">
                {filteredNavItems.map((item) => (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    icon={item.icon}
                    label={item.label}
                    active={pathname === item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </div>
              <div className="border-t mt-8 pt-4">
                {user && (
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Users size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{user.full_name}</p>
                      <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
                    </div>
                  </div>
                )}
                <Button variant="outline" className="w-full justify-start gap-2" onClick={logout}>
                  <LogOut size={16} />
                  <span>Log out</span>
                </Button>
              </div>
            </nav>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
