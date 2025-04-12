import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Check if user has required role
export function hasRole(userRole: string | undefined, requiredRoles: string[]) {
  if (!userRole) return false
  return requiredRoles.includes(userRole)
}

// Format date to locale string
export function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

// Get status color based on status string
export function getStatusColor(status: string) {
  const statusMap: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    completed: "bg-green-100 text-green-800",
    in_progress: "bg-blue-100 text-blue-800",
    cancelled: "bg-red-100 text-red-800",
    high: "bg-red-100 text-red-800",
    medium: "bg-yellow-100 text-yellow-800",
    low: "bg-green-100 text-green-800",
  }

  return statusMap[status.toLowerCase()] || "bg-gray-100 text-gray-800"
}

// Convert snake_case to Title Case
export function formatSnakeCase(text: string) {
  return text
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
