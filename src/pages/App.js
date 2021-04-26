import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom'
import Home from './Home'
import DataSearch from './DataSearch'
import DataListView from './DataListView'

export default function App() {
  return (
    <HashRouter>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={DataSearch} />
          <Route path='/view-data' component={DataListView} />
      </Switch>
    </HashRouter>
  );
}
