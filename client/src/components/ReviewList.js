import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import { Button, Box } from "../styles";
import Review from './Review';


function ReviewList() {

    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);
  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <Review key={review.id}>
            <Box>
              <h2>{review.title}</h2>
              <p>
                <em>Title: {review.title} </em>
                &nbsp;·&nbsp;
                <cite>By {review.comment}</cite>
              </p>
            
            </Box>
          </Review>
        ))
      ) : (
        <>
          <h2>No Reviews Found</h2>
          <Button as={Link} to="/review">
            Make a New  Review
          </Button>
        </>
     )}
  

    </div>
  )
}

export default ReviewList