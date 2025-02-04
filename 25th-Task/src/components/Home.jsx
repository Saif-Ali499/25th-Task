import React from 'react'
import ProductDiv from './productDiv'
import CartDiv from './cartDiv'
import '../App.css'
function Home() {
  return (
    <div id="wraperDiv">
        <div className="">
          <ProductDiv />
        </div>
        <div className="">
          <CartDiv />
        </div>
      </div>
  )
}

export default Home