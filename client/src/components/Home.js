import React from 'react'
import Navbar from '../pages/Navbar'
import Header from '../pages/Header'
import Featured from '../pages/Featured'
import "../styles/home.css"

function Home({hotels, user, setUser }) {
 
    return (
        <div>
          <Navbar  user={user} setUser = {setUser} />
          <Header/>
          <div className="homeContainer">
            <Featured  hotels={hotels}/>
            <hr  className='line'/>
          
          </div>
        </div>
    );
};
    
export default Home