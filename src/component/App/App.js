import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';

export class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </BrowserRouter>
      </main>
    )
  }
}

export default App;
