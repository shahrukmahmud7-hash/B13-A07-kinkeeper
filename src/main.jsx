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
import FriendsDetails from './pages/FriendsDetails'
import { FriendActivityProvider } from './context/FriendActivityContext'
import { ToastContainer } from 'react-toastify'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element : <RootLayout></RootLayout>,
      children :[
        {
          path: '/',
          element : <Home></Home>,
          // loader: ()=> fetch('/friends.json')
        },
        {
          path: '/timeline',
          element : <TimeLine></TimeLine>
        },
        {
          path: '/stats',
          element : <Stats></Stats>
        },
        {
          path: 'friend/:id',
          element: <FriendsDetails></FriendsDetails>
        },
      ],
      errorElement: <NotFound></NotFound>
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>  
     <FriendActivityProvider>
  <RouterProvider router={router} />
     </FriendActivityProvider>
      <ToastContainer 
        position="top-center"
       
      />
  </StrictMode>,
)
