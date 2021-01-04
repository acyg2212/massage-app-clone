import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import Footer from "./components/Footer"
import RegisterUser from "./components/RegisterUser"

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/login/register" component={RegisterUser} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
