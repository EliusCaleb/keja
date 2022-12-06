import React from 'react'
import Navbar from '../pages/Navbar'
import Header from '../pages/Header'
import Featured from '../pages/Featured'
import Footer from '../pages/Footer'
import "../styles/home.css"

function Home({hotels}) {
 
    return (
        <div>
          <Navbar />
          <Header/>
          <div className="homeContainer">
            <Featured  hotels={hotels}/>
            <h1 className="homeTitle">Browse by property type</h1>
            <hr  className='line'/>
            <Footer/>
          </div>
        </div>
    );
};
    
export default Home