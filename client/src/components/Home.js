import React from 'react'
import Navbar from '../pages/Navbar'
import Header from '../pages/Header'
import Featured from '../pages/Featured'
import "../styles/home.css"

function Home({hotels}) {
 
    return (
        <div>
          <Navbar />
          <Header/>
          <div className="homeContainer">
            <Featured  hotels={hotels}/>
            <hr  className='line'/>
          
          </div>
        </div>
    );
};
    
export default Home