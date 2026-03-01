import React from 'react';
import './Home.css'; // Create this CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-box">
        <h2>Welcome to CurrencyX 🌐💱</h2>
        <p>
          Convert currencies instantly and accurately with real-time exchange rates powered by reliable APIs.
        </p>
        <p>
          Whether you're a traveler, trader, student, or working with international payments — CurrencyX is your go-to tool.
        </p>

        <ul>
          <li>✅ Fast currency conversion</li>
          <li>🔊 Voice-enabled conversion</li>
          <li>🌍 Multi-language UI</li>
        </ul>

        <p>
          Get started now by visiting the <strong>Converter</strong> page from the navigation bar above!
        </p>
      </div>
    </div>
  );
};

export default Home;
