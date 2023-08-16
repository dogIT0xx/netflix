import { Netflix, Login } from '~/pages'

// Not logged in
const publicRoutes = [
  { path: '/', page: Netflix },
  { path: '/login', page: Login },
]

// Logged
const privateRoutes = []

export { publicRoutes, privateRoutes }
