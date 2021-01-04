import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
      <footer>

      </footer>
    </BrowserRouter>
  );
}

export default App;
