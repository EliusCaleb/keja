import React,{useState} from 'react'
import { Button, Error, Input, FormField, Label } from "../styles";
import Signup from './Signup';


function Login({onLogin}) {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLogIn, setShowLogIn] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r)=>{
      setIsLoading(false);
      if(r.ok){
        r.json().then((user) => onLogin(user));    
        // localStorage.setItem("user",JSON.stringify(r))        
      } else if(r.status ===401){
        setErrors(['invalid username or password'])
      }
      
    })
  }

  return (
    <div>
     
        {
          showLogIn ? (
             
            <form onSubmit={handleSubmit}>
            <FormField>
              <h1> Welcome</h1>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormField>
            <FormField>
              <Button variant="fill" color="primary" type="submit">
                {isLoading ? "Loading..." : "Login"}
              </Button>
              <p> Don't have an account?
                <button className='btn btn-success' onClick={()=>{setShowLogIn(false)}}> Sign Up</button>
              </p>
            </FormField>
            <FormField>
              {errors?.map((err) => (
                <Error key={err}>{err}</Error>
              ))}
            </FormField>
          </form>

          ) : (
            <Signup  onLogin={onLogin}/>
          )
     }


    </div>
        
  );
}

export default Login