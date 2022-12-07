import "../styles/navbar.css"
import {  NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div className="navbar">
    <div className="navContainer">
      <span className="logo">Keja App</span>
      <div className="navItems">
      <NavLink className='btn btn-success'to={`/`}>Home</NavLink>
        <button className="navButton">Login</button>
      </div>
    </div>
  </div>
  )
    
}

export default Navbar