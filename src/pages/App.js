import React from 'react';
import { Route, HashRouter } from 'react-router-dom'
import ExamplePage from './ExamplePage'
import HomePage from './HomePage'

export default function App() {
  return (
    <HashRouter>
      <div>
        <Route path='/' component={HomePage} />
        <Route path='/example' component={ExamplePage} />
      </div>
    </HashRouter>
  );
}
