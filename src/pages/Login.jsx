import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [validationError, setValidationError] = useState('');
  const navigate = useNavigate();

  const correctPassword = "currency123"; // ✅ Replace with env var in production

  // Simple password validator
  const validatePassword = (pwd) => {
    if (pwd.length < 8) {
      return 'Password must be at least 8 characters.';
    }
    // Optional: Add more checks like uppercase, symbol, etc.
    return '';
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const validationMsg = validatePassword(password);
    if (validationMsg) {
      setValidationError(validationMsg);
      return;
    } else {
      setValidationError('');
    }

    if (password === correctPassword) {
      localStorage.setItem("loggedIn", "true");
      navigate('/converter');
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN 💱</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Enter password 🔒"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
              setValidationError(validatePassword(e.target.value));
            }}
            required
          />
          {validationError && <p className="error">{validationError}</p>}
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={!!validationError}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
