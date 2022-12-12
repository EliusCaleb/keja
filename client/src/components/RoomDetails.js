import React, { useContext } from 'react'
import BookContext from '../BookContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Header from '../pages/Header';

function RoomDetails() {
    const { bookings } = useContext(BookContext)
    console.log(bookings)

    const navigate = useNavigate();

    function handleClick(e) {
        navigate('/')
    }

   
    
    return (

        <>
            < Navbar />
            < Header />
            <div className="roomcard col d-flex justify-content-center" key={bookings.id} >
                <div className="card-body"  key={bookings.id}>
                    <h4 className="card-title">Bookings</h4>
                    {bookings.map((booking) => (
                        <div  key={booking.id}>
                            <h5 className="card-subtitle mb-2 text-muted"   >Start Date: {booking.start_date}</h5>
                            <h5 className="card-subtitle mb-2 text-muted" > Ending Date: {booking.end_date}</h5>
                            <h5 className="card-subtitle mb-2 text-muted"  > Hotel Name: {booking.hotel_name}</h5>
                            <h5 className="card-subtitle mb-2 text-muted"  >Room Type:   {booking.room_title}</h5>
                            <h5 className="card-subtitle mb-2 text-muted"  >Room Number: {booking.room_number}</h5>
                           
                        </div>
                    ))}

                    <button className="btn btn-info mb-4 mr-3 " onClick={handleClick}>Go back</button>
                </div>
            </div>

        </>
    )
}

export default RoomDetails