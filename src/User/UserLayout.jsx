import React from 'react'
import Item from './Item'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
// import Minicard from './minicards/Minicard'
// import Card from './Card'
import Header from './header/Header'





function UserLayout() {
  return (
    <div>
      <Header />
      <Item />
      <Outlet />

      {/*<Minicard/>
       <Card/> */}
      <Footer/>
    </div>
  )
}

export default UserLayout