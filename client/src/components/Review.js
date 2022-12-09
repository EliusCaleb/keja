import React,{useState,useEffect} from 'react'
import Navbar from '../pages/Navbar';
import Header from '../pages/Header';
import { useNavigate, useLocation} from 'react-router-dom';
import { Button, Error, FormField, Input, Label } from "../styles";


function Review() {
  const navigate = useNavigate(); 
  const location = useLocation();

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("")
  const [ hotel_id,setHotelId ] = useState(0)
  const [ review, setReview] = useState(null)
  
  function handleClick(e) {
    navigate('/')
  }

  useEffect(() => {
    
    if (location.state !== null){
       setHotelId(location.state.hotel)
    }
    fetch(`/reviews/:id`)
      .then((r) => r.json())
     .then((review) => setReview(review));
  }, [location ]);
  console.log(review)

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
        r.json().then((data) => console.log('reviews',data))
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
            <Label htmlFor="comment">Comment</Label>
            <Input
              type="text"
              id="price"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
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
             { isLoading ? "Loading..." : "Submit "} 
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
    
   </>
 
  )
}

export default Review