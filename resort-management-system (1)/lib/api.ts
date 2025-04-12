import axios from "axios"

// Create an axios instance with default config
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://192.168.153.35:5000",
  headers: {
    "Content-Type": "application/json",
  },
})

// Add a request interceptor to include the token in all requests
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem("token")

    // If token exists, add it to the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add a response interceptor to handle common errors
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle 401 Unauthorized errors (token expired or invalid)
    if (error.response && error.response.status === 401) {
      // Clear localStorage
      localStorage.removeItem("token")
      localStorage.removeItem("user")

      // Redirect to login page
      window.location.href = "/login"
    }

    return Promise.reject(error)
  },
)
