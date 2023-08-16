import { Netflix, Login, Home } from '~/pages'

// Not logged in
const publicRoutes = [
  { path: '/', page: Netflix },
  { path: '/login', page: Login },
  { path: '/browse', page: Home },
]

// Logged
const privateRoutes = []

export { publicRoutes, privateRoutes }
