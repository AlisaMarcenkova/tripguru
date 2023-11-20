// SignIn.js
import React, { useState } from 'react';
import "../pages/SignIn.css";

function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // User successfully authenticated, perform further actions here
        onSignIn();
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred.');
    }
  };


  return (
    <div className='signin-container'>
      <h2 className='signin-heading'>Sign In</h2>
      <form className='signin-form'>
        <div>
          <label className='signin-label'>Email:</label>
          <input
          className='signin-input'
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className='signin-label'>Password:</label>
          <input
            className='signin-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='error-message'>{error}</div>
        <button className='signin-button' onClick={handleSignIn}>Sign In</button>
        <a href="./SignUp.js" className='create-account'>Haven't Signed yet? Create an account here!</a>
      </form>
    </div>
  );
}

export default SignIn;
