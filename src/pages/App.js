import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom'
import Home from './Home'
import SearchData from './SearchData'
import ViewData from './ViewData'

export default function App() {
  return (
    <HashRouter>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={SearchData} />
          <Route path='/view-data' component={ViewData} />
      </Switch>
    </HashRouter>
  );
}
