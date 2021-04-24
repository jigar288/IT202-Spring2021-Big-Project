import React from 'react';
import { Route, HashRouter } from 'react-router-dom'
import ExamplePage from './ExamplePage'
import Home from './Home'

export default function App() {
  return (
    <HashRouter>
      <div>
        <Route path='/' component={Home} />
        <Route path='/example' component={ExamplePage} />
      </div>
    </HashRouter>
  );
}
