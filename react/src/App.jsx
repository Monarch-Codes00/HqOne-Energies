import { useState } from 'react'

import './App.css'
import Hero  from './pages/Herosection'
import Navbar from './components/navbar'
import Service from './pages/ServiceSub'

function App() {
  
  return (
    <>
    <Navbar/>
    <Hero/>
    <Service/>
    </>
  )
}

export default App
