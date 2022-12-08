import React, { useState } from "react";
import Navbar from '../pages/Navbar';
import Header from '../pages/Header';

import { useNavigate} from 'react-router-dom';
import { Button, Error, FormField, Input, Label } from "../styles";

function Room({hotels}) {
  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [title, setTitle] = useState("Guest House");
  const [price, setPrice] = useState(4)
  const [ max_people,setMaxPeople ] = useState(4)
  const [room_number, setRoomNumber] = useState(4)
  const [ description, setDescription] = useState("");
  const [ hotel_id,setHotelId ] = useState(0)
     
 


  
  
  
  function handleClick(e) {
    navigate('/')
  }


  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/rooms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
        max_people,
        room_number,
        description,
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
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="max people">People</Label>
            <Input
              type="number"
              id="max_people"
              value={max_people}
              onChange={(e) => setMaxPeople(e.target.value)}
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
          </FormField> <FormField>
            <Label htmlFor="description">Description</Label>
            <Input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              {isLoading ? "Loading..." : "Submit "}
            </Button>

            <button className="btn btn-info mb-4 mr-3 " onClick={handleClick}>Go Back</button>
          </FormField>
          <FormField>
            {errors?.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </div>
      
    </div>
  )
}

export default Room