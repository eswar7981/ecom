import React from 'react'
import {Route, RouterProvider, Switch, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'

import Store from './Components/Pages/Store'
import ContactUs from './Components/Pages/ContactUs'
import MainNavigation from './Components/Navigation/MainNavigation'
import ProductDescription from './Components/Layout/ProductDescription'
import Body from './Components/Layout/Body'
import Login from './Components/Pages/Login'

const App = () => {
  return (
    <>
    <header>
      <MainNavigation/>
    </header>
    <main>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
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
      <Route path="/products/:productid">
        <ProductDescription></ProductDescription>
      </Route>
      </Switch>
    </main>
    </>
  )
}

export default App
