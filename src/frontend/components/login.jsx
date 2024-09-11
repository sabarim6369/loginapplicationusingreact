import React, { useState } from 'react';
import '../css/Login.css';  
import axios from 'axios';
import { useNavigate,Link} from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevents the default form submission
    try {
      const response = await axios.post("http://localhost:4000/login", { email, password });
      setMessage(response.data.message);
      setEmail("");
      setPassword("");
      localStorage.setItem("email",email)
      navigate("/home");
    } catch (err) {
      setMessage(err.response?.data?.message || 'An unexpected error occurred');
    }
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <p>Dont have an account?</p><Link to="/signup">SIGNUP</Link>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
