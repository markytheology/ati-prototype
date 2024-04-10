import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/HomePage';
import SignIn from './Components/Login/Signin';
import SignUp from './Components/Login/Signup';

function App() {
  const handleSignIn = (credentials) => {
    console.log('Sign In attempt with credentials:', credentials);
    // Here, you can integrate sign-in logic or services.
  };

  const handleSignUp = (userData) => {
    console.log('Sign Up attempt with data:', userData);
    // Here, you can integrate sign-up logic or services.
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
