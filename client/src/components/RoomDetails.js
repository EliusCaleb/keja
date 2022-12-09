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
            <div className="roomcard col d-flex justify-content-center" >
                <div className="card-body">
                    <h4 className="card-title">Bookings</h4>
                    {bookings.map((booking) => (
                        <div>
                            <h5 className="card-subtitle mb-2 text-muted"  >{booking.start_date}</h5>
                            <h5 className="card-subtitle mb-2 text-muted"> {booking.end_date}</h5>
                            <h5 classname="card-subtitle mb-2 text-muted">{booking.hotel_id}</h5>
                            <h5 className="card-subtitle mb-2 text-muted"> {booking.room_id}</h5>
                            <h5 className="card-subtitle mb-2 text-muted">{booking.room_number}</h5>
                            <button className="btn btn-info mb-4 mr-3 " onClick={handleClick}>Go back</button>
                        </div>
                    ))}


                </div>
            </div>




        </>
    )
}

export default RoomDetails