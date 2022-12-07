import React,{useEffect,useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Hotel from "./Hotel";
// import List from "./List";
import Login from "./Login";
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
         {/* <Route path="/hotels" element={<List />} /> */}
        <Route path="/hotels/:id" element={<Hotel hotels={hotels} />} />
        <Route path="/rooms/:hotelId" element={<Room hotels={hotels}/>} /> 
      </Routes>
    </div>
  
  );
}
export default App;