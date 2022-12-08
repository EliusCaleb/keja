import React, { useState, useEffect } from "react";
import Navbar from '../pages/Navbar';
import Header from '../pages/Header';

import { useLocation, useNavigate} from 'react-router-dom';
import { Button, Error, FormField, Input, Label } from "../styles";

function  Book () {
  // const [ bookId] = useParams()
  // console.log('ninja',bookId)
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [start_date, setStartDate] = useState("2022-12-10");
  const [end_date, setEndDate] = useState("")
  const [ room_number,setRoomNumber ] = useState(0)
  const [room_id, setRoomId] = useState(0)
  const [ user_id, setUserId] = useState(0);
  const [ hotel_id, setHotelId ] = useState(0)
  const [book, setBook] = useState(null);  
  function handleClick(e) {
    navigate('/')
  }
   const location = useLocation();
  

  useEffect(() => {
    // let user = JSON.parse(localStorage.getItem("user"))
    // setUser('books',user)
   
    if (location.state !== null){
       setHotelId(location.state.hotel)
       setRoomId(location.state.room)
       setRoomNumber(location.state.roomnumb)
    }
    fetch('/books/:id')
      .then((r) => r.json())
     .then((book) => setBook(book));
  }, [location]);
  console.log(book)


  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start_date,
        end_date,
        room_number,
        room_id,
         user_id,
         hotel_id,
     
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        navigate("/");  
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    


    <div>
      < Navbar />
      < Header />
     

      <div className="roomContainer">
      <form   className= "room form" onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="title">Start Date</Label>
            <Input
              type="text"
              id="title"
              value={start_date}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="price">End Date</Label>
            <Input
              type="text"
              id="end_date"
              value={end_date}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </FormField>
         
          <FormField>
            <Label htmlFor="room number"> roomNumber</Label>
            <Input
              type="number"
              id="room_number"
              value={room_number}
              onChange={(e) => setRoomNumber(e.target.value)}
            />
          </FormField> 
          <FormField>
            <Label htmlFor="max people">Room</Label>
            <Input
              type="number"
              id="room_id"
              value={room_id}
              onChange={(e) => setRoomId(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="description">User</Label>
            <Input
              type="number"
              id="description"
              value={user_id}
              onChange={(e) => setUserId(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="hotel_id">Hotel</Label>
            <Input
              type="number"
              id="hotel_id"
              value={hotel_id}
               onChange={(e) => setHotelId(e.target.value)}
            />
          </FormField>
          
          <FormField>
            <Button color="primary" type="submit">
               
              {isLoading ? "Loading..." : "Reserve "}
            </Button>

          
          </FormField>
          <FormField>
            {errors?.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
          <button className="btn btn-info mb-4 mr-3 " onClick={handleClick}>Go Back</button>
        </form>
      </div>
      
    </div>
  )
}

export default Book