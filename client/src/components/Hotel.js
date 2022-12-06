import React, { useState } from 'react';
import "../styles/hotel.css";
import Navbar from '../pages/Navbar';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { useNavigate, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useParams} from 'react-router-dom'
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Hotel({ hotels }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  console.log(hotels)
   const params = useParams();
   console.log(params)
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
        <NavLink className='btn btn-success mb-3' to={`/rooms`}>Book Now !</NavLink>
        <div className="hotelWrapper">

          {/* <h1 className="hotelTitle">Tower Street Apartments</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Elton St 125 New york</span>
            </div>
            <span className="hotelDistance">
              Excellent location – 500m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over $114 at this property and get a free airport taxi
            </span> */}
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
            {/* <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in the heart of City</h1>
                <p className="hotelDesc">
                  Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                  Street Apartments has accommodations with air conditioning and
                  free WiFi. The units come with hardwood floors and feature a
                  fully equipped kitchenette with a microwave, a flat-screen TV,
                  and a private bathroom with shower and a hairdryer. A fridge is
                  also offered, as well as an electric tea pot and a coffee
                  machine. Popular points of interest near the apartment include
                  Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                  airport is John Paul II International Kraków–Balice, 16.1 km
                  from Tower Street Apartments, and the property offers a paid
                  airport shuttle service.
                </p>
              </div> */}

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
                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
        <hr/>
        <Footer />
      </div>
    </div>
  );
}

export default Hotel