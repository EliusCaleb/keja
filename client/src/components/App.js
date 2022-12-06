import React,{useEffect,useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Hotel from "./Hotel";
import List from "./List";
import Login from "./Login";


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

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />  
      </Routes>
    </div>
  );
}
export default App;