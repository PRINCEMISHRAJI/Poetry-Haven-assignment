// Main.js
import React from 'react';
// import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <h1> Welcome to Poetry Haven, INC. </h1>
      <p>Poerty Haven is an international conglomerate for poet enthusiasts around the world.</p>
      <div className="buttons">
        <button className="primary">Create Account</button>
        <button className="secondary">Read Poems</button>
      </div>
    </main>
  );
};

export default Main;
