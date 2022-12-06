
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Error, FormField, Input, Label } from "../styles";

function Room() {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [title, setTitle] = useState("Guest House");
  const [price, setPrice] = useState(4)
  const [ max_people,setMaxPeople ] = useState(4)
  const [room_number, setRoomNumber] = useState(4)
  const [ description, setDescription] = useState("")
  const [ hotel_id, setHotelId]= useState(3)



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
        navigate("/rooms");  
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            <Label htmlFor="hotel id">Hotel Id</Label>
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
          </FormField>
          <FormField>
            {errors?.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
    </div>
  )
}

export default Room