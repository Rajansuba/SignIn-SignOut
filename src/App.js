// src/App.js
import React, { useState } from 'react';
import SignIn from './SignIn';
import SignOut from './SignOut';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = (username) => {
    setUser(username);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <SignOut onSignOut={handleSignOut} />
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </div>
  );
};

export default App;
