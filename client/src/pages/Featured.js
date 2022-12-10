import "../styles/featured.css"
import React from 'react'
import { NavLink } from 'react-router-dom';


function Featured({hotels}) {

    return (
      <>
      <h2 className='text-center text-success my-5'>Hotels</h2>
      <div className='container my-5 py-5'>
          <div className='row d-flex justify-content-center' key={hotels.id}>
                    
                      {hotels.map((hotel) => {
                          return (
                              <>
                              <div className='col-md-4' key={hotel.id} >
                              <div className="card text-center"  key={hotel.id}>
                              <img src={hotel.photo} className="card-img-top" alt="..." />
                                  <div className="card-body"key={hotel.id}>
                                      <h5 className="card-title">{hotel.name}</h5>
                                      <h4 className="card-text">{hotel.city}</h4>
                                      <h4 className="card-text">Rate {hotel.ratings}</h4>

                                      <NavLink className='btn btn-success'to={`/hotels/${hotel.id}`}>View</NavLink>
                                  </div>
                              </div>
                              </div>
                             
                              </>
                          )
                      })}

                  </div>

              </div>


  </>
       
      );
    };


export default Featured