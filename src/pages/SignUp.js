
import React, { useState } from 'react';
import '../pages/SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // User registration successful
        // You can redirect to a login page or perform other actions here
        console.log('User registered successfully');
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred.');
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignUp}>
        <div>
          <label className="signup-label">Email:</label>
          <input
            className="signup-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="signup-label">Password:</label>
          <input
            className="signup-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="error-message">{error}</div>
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
