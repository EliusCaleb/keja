import React, { useState, useEffect } from 'react';
import "../styles/hotel.css";
import Navbar from '../pages/Navbar';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { useNavigate, useParams,Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function Hotel({ hotels }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const params = useParams();
  console.log('hotel', params)
  const navigate = useNavigate();

  function handleClick(e) {
    navigate('/')
  }
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const [hotel, setHotel] = useState(null);




  useEffect(() => {
    fetch(`/hotels/${params.id}`)
      .then((r) => r.json())
      .then((hotel) => setHotel(hotel));
  }, [params]);

  console.log('rooms number', hotel)


  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <button className="btn btn-info mb-4" onClick={handleClick}>Go Back</button>

        <div className="hotelWrapper">
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className='container  mt-5 .bg-secondary.bg-gradient'>
              <div className='row '>
                <div className="card" >
                  <div key={hotels.id}>
                    {hotels.map(hotel => (
                      hotel.id === parseInt(params.id) &&
                      <div className='item '>
                        <h2 className="card-text fw-bold fs-5 text-uppercase ">{hotel.hotel_type}</h2>
                        <p className='lead fw-bolder text-center '>  {hotel.address}
                          <i className='fa fa-star'></i></p>
                        <div className="card-body text-50">
                          <h2 className="card-text fw-bold fs-5 text-capitalize ">{hotel.name}</h2>
                          <p className="card-text  fs-5">{hotel.description}</p>
                          <p className="card-text fw-bold fs-5 "> ${hotel.cheapest_price}</p>
                          <div className='card mb-3'>
                          <div className='card-body'>
                            <h4>Rooms</h4>
                            {hotel.rooms.map((room) => (
                              <div>
                                <h1>{room.title}</h1>
                                <h5>Price: {room.price}</h5>
                                <h5>  Door Number: {room.room_number}</h5>
                                <h5>  Room Description: {room.description}</h5>

                                <a className='btn btn-success mb-3' href='#/' onClick={()=>navigate("/books",{
                                 state:{ 
                                     hotel: hotel.id,
                                     room : room.id,
                                     roomnumb : room.room_number
                                 }
                               } )}>Books Now</a>

                                
                              </div>

                              
                            ))}
                               
                          </div>
                          </div>
                        

                          <div className="card" >
                            <div className="card-body">
                              <h5 className="card-title">Reviews</h5>
                              {hotel.reviews.map((review) => (
                              <div>
                                <h1>{review.title}</h1>
                                <h5>comment: {review.comment}</h5>
                                {/* <button className="btn btn-info mb-4 mr-3 " onClick={handleDeleteClick}>Delete Review</button> */}
                              </div>
                            ))}
                              <Link className='btn btn-success mb-3' to={`/reviews`}>Add Reviews</Link>
                              
                            </div>
                          </div>

                          
                        </div>

                      </div>

                    ))}
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>


        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel