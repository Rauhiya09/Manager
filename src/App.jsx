/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { BrowserRouter,Routes,Route } from "react-router-dom"

import Login from './Pages/Login'
import Register from './Pages/Register'
import MainLayout from './Layout/MainLayout'
import ViewAccount from './Pages/ViewAccount'
import AddAccoount from './Pages/AddAccount'
import Home from "./Pages/Home"



const App = () => {
  return (
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='MainLayout' element={<MainLayout/>}>
      <Route index element={<ViewAccount/>}/>
      <Route path='ViewAccount' element={<ViewAccount/>}/>
      <Route path='AddAccount' element={<AddAccoount/>}/>

      </Route>

    </Routes>
  </BrowserRouter>

  </>
  )
}

export default App

