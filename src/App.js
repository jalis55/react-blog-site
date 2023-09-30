import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';

import './App.css';
import {signOut} from 'firebase/auth'
import { auth } from './firebase-config';





const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  
  const signOutUser=()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/login";
      

    })
  }
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">Create Post</Link>
        
        {!isAuth ? <Link to="/login">Login</Link> : <button onClick={signOutUser}>Signout</button>}

      </nav>

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  )
}

export default App;