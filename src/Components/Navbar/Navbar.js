// Necessary modules from React library.
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Doctor avatar logo for image src.
import logo from './doctor_avatar.png';
// Custom styles.
import './Navbar.css';

// Function component for Navbar.
const Navbar = () => {
    // useState hooks for states.
    const [click, setClick] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        // Removes all session storage and local storage used for logging in.
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        // Removes email phone.
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        setUsername("");
        // Removes the reviewFormData from local storage.
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
            }
            setEmail('');
            window.location.reload();
    };
    
    useEffect(() => {
        const storedEmail = sessionStorage.getItem("email");
        if (storedEmail) {
            setIsLoggedIn(true);
            setUsername(storedEmail.split("@")[0]);
        }
    }, []);

    const handleDropdown = () => { setShowDropdown(!showDropdown) };

    // JSX to render Navbar element.
    return (
        <nav>
        {/* Navigation logo section */}
        <div className="nav-logo">
            {/* Link to the home page */}
            <a href="/">StayHealthy <img className="nav-logo-img" src={logo} /></a>
        </div>
        {/* Navigation icon section with an onClick event listener */}
        <div className="nav-icon" onClick={handleClick}>
            {/* Hamburger Menu (called from Bootstrap Font Awesome) */}
            <i className={click ? "fa fa-times" : "fa fa-bars"} />
        </div>
        {/* Unordered list for navigation links with 'active' class */}
        <ul className={click ? "nav-links active" : "nav-links"}>
            <li className="link">
                <Link to="/">Home</Link>
            </li>
            <li className="link">
                <Link to="/instant-consultation">Appointments</Link>
            </li>
            {isLoggedIn?(
                <>
                    <p>Welcome, {username}</p>
                    <li className="link">
                        <button className="btn2" onClick={handleLogout}>Logout</button>
                    </li>
                </> ) : ( <>
                    <li className="link">
                        <Link to="/signup"><button className="btn1">Sign Up</button></Link>
                    </li>
                    <li className="link">
                        <Link to="/login"><button className="btn1">Login</button></Link>
                    </li>
                </>
            )}
        </ul>
        </nav>
    );
};

export default Navbar;