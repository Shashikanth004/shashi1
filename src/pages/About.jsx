import React from 'react';
import './About.css'; // Create this CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <h2>About 💹</h2>
        <p>
          Welcome to <strong>CurrencyX</strong> — your fast and reliable currency converter app.
          Our mission is to make global money exchange simple, accurate, and visually enjoyable. 🌍💱
        </p>
        <p>
          Features include:
          <ul>
            <li>🔁 Real-time exchange rates</li>
            <li>📊 Historical data charts</li>
            <li>✨ Trending currency pairs</li>
            <li>🌐 Multilingual support</li>
            <li>🕓 Conversion history</li>
          </ul>
        </p>
        <p>
          Created with ❤️ using React, Vite, and open APIs. Secure, fast, and built for travelers, traders, and everyone in between!
        </p>
      </div>
    </div>
  );
};


export default About;
