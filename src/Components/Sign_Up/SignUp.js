// Necessary modules from React library.
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
// Custom styles.
import './SignUp.css';

// Function component for SignUp.
const Sign_Up = () => {
    // useState hooks for states.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    // State to show error messages.
    const [showerr, setShowerr] = useState('');
    // Navigation hook for react-router.
    const navigate = useNavigate(); 

    // Handles form submission.
    const register = async (e) => {
        // Prevents default form submission.
        e.preventDefault();

        // Registers user via API call (fetch request).
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone
            })
        });
        // Parses response into JSON.
        const json = await response.json();
        if (json.authtoken) {
            // Stores user data in session storage.
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirects user to home page and refreshes page.
            navigate("/");
            window.location.reload();
        } else {
            if (json.error) {
                setShowerr(json.error);
                console.log(json.error);
            }
        }
    };

    // JSX to render SignUp page.
    return (
        <div className="signup-container">
        <h1>Sign Up</h1>
        <h3>Already a member? <Link to="/login">Login</Link></h3>
        {/* Form that REQUIRES Role, Name, Phone No., Email, and Password. Submit and Reset button at the end. */}
        <form method="POST" onSubmit={register} className="signup-form" autoComplete="off">
            <table>
            <tbody>
                <tr>
                <td>Role</td>
                <td>
                    <div className="signup-radio-row">
                        <input type="radio" name="role" id="patient" required />
                        <label htmlFor="patient">Patient</label>
                        <input type="radio" name="role" id="doctor" />
                        <label htmlFor="doctor">Doctor</label>
                    </div>
                </td>
                </tr>
                <tr>
                    <td><label htmlFor="name">Name</label></td>
                    <td><input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" required={true} placeholder="Your name here" minLength="4" aria-describedby="helpId" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="phone">Phone #</label></td>
                    <td><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" required={true} placeholder="Your phone number here" maxLength="10" aria-describedby="helpId" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="email">E-mail</label></td>
                    <td><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required={true} placeholder="Your e-mail address here" aria-describedby="helpId" /></td>
                </tr>
                <tr>
                    <td><label htmlFor="password">Password</label></td>
                    <td><input value={password} onChange={(e) => setPassword(e.target.value)} type="text" name="password" id="password" required={true} placeholder="Your password here" minLength="8" aria-describedby="helpId" /></td>
                </tr>
            </tbody>
            </table>
            <div className="signup-btn-row">
                <button type="submit" className="btn1">Submit</button>
                <button type="reset" className="btn1">Reset</button>
            </div>
            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
        </form>
        </div>
    );
};

export default Sign_Up;