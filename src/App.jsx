// App.js
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div className="content-container">
        <div className="card-container">
          <Card image="/rabindranath.jpg" name="Rabindranath Tagore" title="The Bard of Bengal" />
          <Card image="/william.jpg" name="William Shakespeare" title="Bard of Avon" />
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
