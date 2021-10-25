import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth.js';
import Game from './components/Game/Game.js';

const App = () => (

   <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/home" exact component={Game} />
      </Switch>
  </BrowserRouter>

);

export default App;
