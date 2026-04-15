import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import TimeLine from './pages/timeline/TimeLine'
import Stats from './pages/stats/Stats'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element : <RootLayout></RootLayout>,
      children :[
        {
          path: '/',
          element : <Home></Home>
        },
        {
          path: '/timeline',
          element : <TimeLine></TimeLine>
        },
        {
          path: '/stats',
          element : <Stats></Stats>
        },
      ],
      errorElement: <NotFound></NotFound>
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
