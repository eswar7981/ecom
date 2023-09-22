import { Outlet } from "react-router-dom";


import React from 'react'
import MainNavigation from "./MainNavigation";

const Root = () => {
  return (
    <>
    <div>
      <MainNavigation/>
      <Outlet/>
      </div>
    </>
  )
}

export default Root
