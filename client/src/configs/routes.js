import Login from '~/pages/Login'
import Netflix from '~/pages/Netflix'

// Not logged in
const publicRoutes = [
  { path: '/', page: Netflix },
  { path: '/login', page: Login },
]

// Logged
const privateRoutes = []

export { publicRoutes, privateRoutes }
