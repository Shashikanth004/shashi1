import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate(); // 👈 For programmatic navigation

  const toggleTheme = () => {
    document.body.className = darkMode ? '' : 'dark';
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h2><center>🌍 CURRENCY CONVERTER 💱</center></h2>
      <div className="links">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/")}>Home 🏡</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/flags")}>Currency</button>
        <button onClick={() => navigate("/converter")}>Converter💱</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <button onClick={toggleTheme}>
          {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

        
    

