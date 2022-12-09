import React,{useContext} from 'react'
import BookContext from '../BookContext';
import { useNavigate} from 'react-router-dom';

function RoomDetails() {
    const { bookings} = useContext(BookContext)
    console.log(bookings)
    
    const navigate = useNavigate();

    function handleClick(e) {
        navigate('/')
      }
  return (

     <>
             

             <div className="card-body text-50">
                              <h5 className="card-title">Bookings</h5>
                              {bookings.map((booking) => (
                              <div>
                                <h5>{booking.start_date}</h5>
                                 <h5> {booking.end_date}</h5>
                                 <h5>{booking.hotel_id}</h5> 
                                 <h5> {booking.room_id}</h5>
                                <h5>{booking.room_number}</h5>  
                                 <button className="btn btn-info mb-4 mr-3 " onClick={handleClick}>Go back</button>
                              </div>
                            ))}
                        </div>

     </>
  )
}

export default RoomDetails