
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Dropdown from "./components/Dropdown";
import LandingScreen from "./screens/LandingScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import AddEvent from "./screens/AddEvent"

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (

    <Router>
      <NavBar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch >
        <Route exact path="/">
          <LandingScreen />
        </Route>
        <Route path="/home">
          <HomeScreen />
        </Route>
        <Route path='/login'>
          <LoginScreen />
        </Route>
        <Route to="/create">
          <AddEvent />
        </Route>
        <Route path='/signup' >
          <SignUpScreen />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
