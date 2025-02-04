import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './App/store.js'
import { Provider } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router'
import Home from './components/Home.jsx'
import Order from './components/Order.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='Order' element={<Order/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
    <RouterProvider router={router} />
  </Provider>,
)
