// Necessary modules from React library.
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
// Custom styles.
import './Login.css';

const Login = () => {
    // useState hooks for states.
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // Navigation hook for react-router.
    const navigate = useNavigate();

    // Checks if user is already authenticated, then redirected to home page.
    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) { navigate("/"); }
    }, []);

    // Handles form submission.
    const login = async (e) => {
        // Prevents default form submission.
        e.preventDefault();
        // Logs in user via API call (fetch request).
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email,
              password: password
            })
        });
        // Parses response into JSON.
        const json = await res.json();
        if (json.authtoken) {
            // Stores user data in session storage.
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('email', email);
            // Redirects to home page and reload the window.
            navigate('/');
            window.location.reload();
        } else {
            if (json.error) {
                setShowerr(json.error);
                console.log(json.error);
            }
        }
    };

    // JSX to render Login page.
    return (
        <div className="login-container">
        <h1>Login</h1>
        <h3>Not a member yet? <a href="/signup">Sign Up</a></h3>
        {/* Form that REQUIRES Email and Password. Submit and Reset button at the end. */}
        <form onSubmit={login} className="login-form">
            <table>
            <tbody>
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
            <div className="login-btn-row">
                <button type="submit" className="btn1">Submit</button>
                <button type="reset" className="btn1">Reset</button>
            </div>
        </form>
        </div>
    );
};

export default Login;