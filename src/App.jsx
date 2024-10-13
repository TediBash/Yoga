import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/navbar/navabar'
import Corsi from './components/corsi/corsi'
import Dharma from './components/dharma/dharma'
import Scuole from './components/scuole/scuole'
import Eventi from './components/eventi/eventi'
import Bharavi from './components/bharavi/bharavi'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/corsi' element={<Corsi />} />
        <Route path='/dharma' element={<Dharma />} />
        <Route path='/scuole' element={<Scuole />} />
        <Route path="/eventi" element={<Eventi />} />
        <Route path="/bharavi" element={<Bharavi />} />
      </Routes>
    </>
  )
}

export default App
