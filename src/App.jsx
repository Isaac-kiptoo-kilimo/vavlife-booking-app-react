
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <>
    <div className="header">
      <div className="logo">
        <h2>#VANLIFE</h2>
      </div>
    <div className="nav-links">
    <NavLink to="/">Home </NavLink>
    <NavLink to="/about">About </NavLink>
    </div>
    </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  )
}

export default App
