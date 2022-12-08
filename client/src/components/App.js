import React,{useEffect,useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Book from './Book';
import Hotel from "./Hotel";
import Login from "./Login";
import Review from "./Review";
import Room from "./Room"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('/hotels')
            .then(res => res.json())
            .then(data => setHotels(data))

    }, []);

  

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div> 
      <Routes>
        <Route path="/" element={<Home hotels= {hotels} />} />
        <Route path="/hotels/:id" element={<Hotel hotels={hotels} />} />
        <Route path="/rooms" element={<Room  />} /> 
        <Route path="/reviews" element={<Review  />} /> 
        <Route path="/books" element={<Book  />} /> 

      </Routes>
    </div>
  
  );
}
export default App;