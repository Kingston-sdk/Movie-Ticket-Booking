import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = () => {
    if (username === "king" && password === "1234") {
      navigate("/Dashboard");
    } else {
      alert("Incorrect username or password.");
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="Login">
      <div className="component">
        <h1>Login Page</h1>
        <div className="input1">
          <label htmlFor="username">Username:</label>
          <input   value={username} onChange={handleUsernameChange}/>
        </div>
        <div className="input2">
          <label htmlFor="password">Password: </label>
          <input  value={password} onChange={handlePasswordChange}  />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
