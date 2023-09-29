import React, { useContext } from 'react'
import {Redirect, Route, RouterProvider, Switch, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'

import Store from './Components/Pages/Store'
import ContactUs from './Components/Pages/ContactUs'
import MainNavigation from './Components/Navigation/MainNavigation'
import ProductDescription from './Components/Layout/ProductDescription'
import Body from './Components/Layout/Body'
import Login from './Components/Pages/Login'
import PasswordChange from './Components/Pages/PasswordChange'
import Logout from './Components/Pages/Logout'
import Profile from './Components/Pages/Profile'
import CartContext from './Components/Store/CartContext'

const App = () => {
  const ctx=useContext(CartContext)

  return (
    <>
    <header>
      <MainNavigation/>
    
    </header>
    <main>
      <Switch>
        <>
        <div>
      <Route path="/profile" >
          <Profile/>
        </Route>
        <Route path="/login" >
          <Login/>
        </Route>
        <Route path="/logout" >
          <Logout/>
        </Route>
        <Route path="/PasswordPage" exact>
          <PasswordChange/>
        </Route>

       {ctx.alreadylogin && <div>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/store">
        <Store/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/contactus">
        <ContactUs/>
      </Route>
      <Route path="/store/products" exact>
        <Body></Body>
      </Route>
      <Route path="/*" exact>
        <Redirect to="/login"></Redirect>
      </Route>
      </div>
}
      </div>
     
      <Route path="/products/:productid">
        <ProductDescription></ProductDescription>
      </Route>
      </>
      </Switch>
    </main>
    </>
  )
}

export default App
