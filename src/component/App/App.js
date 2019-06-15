import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import AuthRedirect from '../AuthRedirect/AuthRedirect';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';

export class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Route path='*' component={AuthRedirect}/>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/login' component={Landing}/>
          {/*<Route exact path="/signup" component={Landing}/>*/}
          <Route exact path='/dashboard' component={Dashboard}/>
        </BrowserRouter>
      </main>
    )
  }
}

export default App;
