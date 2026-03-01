import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { countryCurrencyData } from '../utils/currencyData';
import './Converter.css';
import { detectUserCurrency } from '../utils/detectCurrency';

const currencyNameToCode = {
  dollar: "USD",
  rupee: "INR",
  euro: "EUR",
  pound: "GBP",
  yen: "JPY",
  won: "KRW",
  yuan: "CNY",
  franc: "CHF",
  real: "BRL",
  dirham: "AED",
  ruble: "RUB",
  peso: "MXN",
};

const Converter = () => {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(null);
  const [listening, setListening] = useState(false);

  // 🌍 Detect user's default currency on first load
  useEffect(() => {
    const getDefaultCurrency = async () => {
      const detectedCurrency = await detectUserCurrency();
      setFrom(detectedCurrency);
    };
    getDefaultCurrency();
  }, []);

  // 💱 Fetch rates when 'from' currency changes
  useEffect(() => {
    axios.get(`https://open.er-api.com/v6/latest/${from}`)
      .then(res => setRates(res.data.rates))
      .catch(() => alert('Failed to fetch rates.'));
  }, [from]);

  const handleConvert = () => {
    const rate = rates[to];
    if (rate) setResult((amount * rate).toFixed(2));
  };

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  // 🎤 Voice Recognition Logic
  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setListening(true);
      console.log("Voice recognition started...");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log("Voice input:", transcript);

      const amountMatch = transcript.match(/(\d+(\.\d+)?)/);
      const fromMatch = Object.keys(currencyNameToCode).find(name => transcript.includes(name));
      const toMatch = Object.keys(currencyNameToCode).reverse().find(name => transcript.includes("to " + name));

      if (amountMatch && fromMatch && toMatch) {
        setAmount(parseFloat(amountMatch[0]));
        setFrom(currencyNameToCode[fromMatch]);
        setTo(currencyNameToCode[toMatch]);
        setTimeout(() => handleConvert(), 500);
      } else {
        alert("Could not understand currencies. Try saying: 'Convert 100 dollars to rupees'");
      }

      setListening(false);
    };

    recognition.onerror = () => {
      alert("Voice recognition failed. Try again.");
      setListening(false);
    };

    recognition.start();
  };

  return (
    <div className="Converter-container">
      <div className="Converter-box">
        <div>
          <h2>Currency Converter</h2>
          <div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              {countryCurrencyData.map(item => (
                <option key={item.code} value={item.code}>
                  {item.flag} {item.code}
                </option>
              ))}
            </select>
            <button onClick={swap}>🔁</button>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              {countryCurrencyData.map(item => (
                <option key={item.code} value={item.code}>
                  {item.flag} {item.code}
                </option>
              ))}
            </select>
            <button onClick={handleConvert}>Convert</button>
            <button onClick={startListening}>
              {listening ? "🎙️ Listening..." : "🎤 Speak"}
            </button>
          </div>

          {result && (
            <h3>{amount} {from} = {result} {to}</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Converter;
