import React from 'react'
import Navbar from '../pages/Navbar'
import Header from '../pages/Header'
import Featured from '../pages/Featured'
import PropertyList from '../pages/PropertyList'
import Footer from '../pages/Footer'
import "../styles/home.css"

function Home() {
    return (
        <div>
          <Navbar />
          <Header/>
          <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList/>
            <hr  className='line'/>
            <Footer/>
          </div>
        </div>
    );
};
    
export default Home