import React from 'react'
import {Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Root from './Components/Navigation/Root'
import Store from './Components/Pages/Store'

const router=createBrowserRouter([
  
  {
    path:'/',
    element:<Root/>,
    children:[
      {path:'/',element:<Home/> },
      {path:'/about',element:<About/>},
      {path:'/store',element:<Store/>}
    ]
  },
 
])


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
