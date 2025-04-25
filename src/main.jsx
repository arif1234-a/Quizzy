import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from '../pages/homepage.jsx'
import Scorepage from '../pages/scorepage.jsx'
import Quizpage from './Components/Quizpage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/scorespage",
    element: <Scorepage />,
  },
  {
    path: "/quizpage",
    element: <Quizpage />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
<RouterProvider router={router} />
  </StrictMode>,
)
