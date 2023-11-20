// SignOut.js
import React from 'react';

function SignOut({ onSignOut }) {
  const handleSignOut = () => {
    // You can implement actual sign-out logic here
    // For this example, we'll just call the onSignOut callback
    onSignOut();
  };

  return (
    <div>
      <h2>Sign Out</h2>
      <p>Are you sure you want to sign out?</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default SignOut;