import React, { useState, useEffect, useContext } from "react";
import Navbar from '../pages/Navbar';
import Header from '../pages/Header';
import { useLocation, useNavigate , Link} from 'react-router-dom';
import { Button, Error, FormField, Input, Label } from "../styles";
import BookContext from "../BookContext";


function  Book () {
  const {addBook} = useContext(BookContext)
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  
  const [start_date, setStartDate] = useState("2022/12/23");
  const [end_date, setEndDate] = useState("2023/01/01")
  const [ room_number,setRoomNumber ] = useState(0)
  const [room_title, setRoomTitle] = useState("")
  const [ user_id, setUserId] = useState("");
  const [ hotel_name, setHotelName ] = useState("")
  const [ hotel_id, setHotelId] = useState(0)
  

  function handleClick(e) {
    navigate('/')
  }
  
   
  
  useEffect(() => {
    if (location.state !== null){
       setHotelId(location.state.hotelId)
       setHotelName(location.state.hotel)
       setRoomTitle(location.state.room)
       setRoomNumber(location.state.roomnumb)
    }
    
  }, [ location]);
  

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
        room_title,
         user_id,
         hotel_name,
     
      }),
    }).then((r) => {

      
      setIsLoading(false);
      if (r.ok) {
        r.json().then((booking)=> console.log("data",booking))
        // navigate("/");  
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
              placeholder="YY/MM/DD"
              value={start_date}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="price">End Date</Label>
            <Input
              type="text"
              id="end_date"
              placeholder="YY/MM/DD"
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
            <Label htmlFor="room title">Room</Label>
            <Input
              type="text"
              id="room_title"
              value={room_title}
              onChange={(e) => setRoomTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="user">User</Label>
            <Input
              type="number"
              id="user_id"
              value={user_id}
              onChange={(e) => setUserId(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="hotel name">Hotel</Label>
            <Input
              type="text"
              id="hotel name"
              value={hotel_name}
               onChange={(e) => setHotelName(e.target.value)}
            />
          </FormField>
          
          <FormField>
            <Button color="primary" type="submit" onClick={() => addBook({start_date,end_date,room_number,room_title, hotel_name })}>
               
               {isLoading ? "Loading..." : "Reserve "}  
            </Button>
            

          
          </FormField>
          <FormField>
            {errors?.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
          <button className="btn btn-info mb-4 mr-3 " onClick={handleClick}>Go Back</button>

          <Link className='btn btn-success'to={`/books/${hotel_id}`}>View</Link>
        </form>
      </div>
     
      
    </div>
  )
}

export default Book