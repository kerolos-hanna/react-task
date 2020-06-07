import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/HomePage/HomePage';
import CardDetails from './pages/CardDetails/CardDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/card-details/:id" component={CardDetails}/>
      </Switch>
    </div>
  );
}

export default App;
