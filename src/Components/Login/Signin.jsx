import React, { useState } from 'react';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="signin-form">
      <h2>Sign In</h2>
      <div className="form-group">
        <label htmlFor="signin-email">Email:</label>
        <input
          type="email"
          id="signin-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="signin-password">Password:</label>
        <input
          type="password"
          id="signin-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
