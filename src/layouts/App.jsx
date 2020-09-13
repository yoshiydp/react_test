import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../scss/common.scss';
import logo from '../logo.svg';

// Defalut page
import Home from '../pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
