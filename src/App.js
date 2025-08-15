// Necessary modules from React library.
import React from 'react';
// Components for routing from react-router-dom library.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Custom componenets.
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/LandingPage';

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
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;
