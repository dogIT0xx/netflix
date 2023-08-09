import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { publicRoutes, privateRoutes } from '~/configs/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.page
          return <Route key={index} path={route.path} element={<Page />} />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
