// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.svg" alt="The People's Poetry logo" />
      </div>
      <nav>
        <input type="text" placeholder="Search Poet" className="search-input" />
      </nav>
    </header>
  );
};

export default Header;
