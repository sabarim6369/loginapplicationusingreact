import React from 'react';
import '../css/Signup.css';
import { useState } from 'react';
import axios from 'axios';
import{useNavigate} from 'react-router-dom'
function Signup() {
    const navigate=useNavigate()
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [message, setmessage] = useState("");

    const handlesubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmpassword) {
            setmessage("Password and confirm password do not match");
            return;
        }

        if (password.length < 8) {
            setmessage("Password length should be above 8 characters. Please change it.");
            return;
        }

        try {
            const response = await axios.post("https://loginapplicationusingreact.onrender.com/signup", { name, email, password });
            setmessage(response.data.message);

            
            setname("");
            setemail("");
            setpassword("");
            setconfirmpassword("");
        } catch (err) {
            setmessage(err.response?.data?.message || 'An unexpected error occurred');
        }
        navigate("/")
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Signup</h2>
                <form onSubmit={handlesubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            value={name} 
                            onChange={(e) => setname(e.target.value)} required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email} 
                            onChange={(e) => setemail(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            value={password} 
                            onChange={(e) => setpassword(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input 
                            type="password" 
                            required
                            placeholder="Confirm your password" 
                            value={confirmpassword} 
                            onChange={(e) => setconfirmpassword(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="signup-btn">Sign Up</button>
                    <p>{message}</p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
