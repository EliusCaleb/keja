import React,{useState} from 'react'
import Navbar from '../pages/Navbar';
import Header from '../pages/Header';
import { useNavigate} from 'react-router-dom';
import { Button, Error, FormField, Input, Label } from "../styles";
function Review() {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("")
  const [ hotel_id,setHotelId ] = useState(0)
  const navigate = useNavigate();  
  function handleClick(e) {
    navigate('/')
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        comment,
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
   <>
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
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="max people">People</Label>
            <Input
              type="number"
              id="max_people"
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
    
   </>
 
  )
}

export default Review