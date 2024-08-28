import React from 'react';
// import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2>Login into your account</h2>
        <form>
          <input type="email" placeholder="developerankitmishra@gmail.com" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <div className="signup-option">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
