import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
