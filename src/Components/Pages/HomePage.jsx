import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to ATIMAN</h1>
      <p>Connecting Caregivers to you!</p>
      <p>
        <Link to="/Signin">Sign in</Link> or <Link to="/Signup">Register</Link> to get started.
      </p>
    </div>
  );
};

export default Home;
