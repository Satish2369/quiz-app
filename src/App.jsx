import React from 'react'
import "./index.css"
import Body from  "./Components/Body"
import Home from './Components/Home'
import Summary from './Components/Summary'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const App = () => {



  
const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/body",
      element:<Body/>
    },
    {
      path:"/summary",
      element:<Summary/>
    },

])


  return <RouterProvider router={router} />
}

export default App
