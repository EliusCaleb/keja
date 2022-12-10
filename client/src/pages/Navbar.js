import "../styles/navbar.css"
import {  NavLink } from 'react-router-dom'


function Navbar({ user, setUser}) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
         setUser(null);
        //r.json().then((user) => setUser(null));
      }
    });
  }

  return (
    <div className="navbar">
    <div className="navContainer">
      <span className="logo">Keja App</span>
      <div className="navItems">
      <NavLink className='btn btn-success'to={`/`}>Home</NavLink>
        <button className="navButton" onClick={handleLogoutClick}>Logout</button>
      </div>
    </div>
  </div>
  )
    
}

export default Navbar