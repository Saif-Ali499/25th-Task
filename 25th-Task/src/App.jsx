import { useState } from 'react'
import './App.css'
import { Header, Footer } from './components'
import {Outlet} from 'react-router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App() {
 
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
