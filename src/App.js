// Necessary modules from React library.
import React from 'react';
// Components for routing from react-router-dom library.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Custom componenets.
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/LandingPage';
import Sign_Up from './Components/Sign_Up/SignUp';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/Instant_Consultation/InstantConsultation';

// Function component for main App.
function App() {
    // Renders main App component.
    return (
    <div className="App">
        {/* Sets up BrowserRouter for routing. */}
        <BrowserRouter>
            {/* Displays Navbar component. */}
            <Navbar/>
            {/* Set up the Routes for different pages */}
            <Routes>
                <Route path="/" element={<Landing_Page/>}/>
                <Route path="/signup" element={<Sign_Up/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/instant-consultation" element={<InstantConsultation/>}/>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;
