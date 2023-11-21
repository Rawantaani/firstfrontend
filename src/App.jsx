
import axios from "axios";
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import{BrowserRouter,Router,Route, Routes}from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'

function App() {
  

  return (
    <>
  <div className="App">
  <BrowserRouter>
    <Navbar/>
    <div className="pages">
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
    </BrowserRouter>

  </div>
    </>
  )
}

export default App
