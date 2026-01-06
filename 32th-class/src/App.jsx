import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {

  
  return (
    <>
  
    {/* React router DOM
      import {BrowserRouter}  from 'react-router-dom' in main.jsx file, and the enclose the app in <BrowserRouter><App/></BrowserRouter>
      then go to app.jsx and import {Routs,Route} 
      <Routs>
      <Route path='/' element={ <Home/> } />
      then import Link from react-router-dom in navbar
      </Routs> 
     */}


      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/productPage' element={ <Products/> }/>
      </Routes>
    </>
  )
}

export default App
