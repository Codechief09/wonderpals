import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import AuthRedirect from '../AuthRedirect/AuthRedirect';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';
// import Itinerary from '../Itinerary/Itinerary';

export class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Route path='*' component={AuthRedirect}/>
          <Route exact path='/' component={Landing}/>
          {/*<Route exact path='/login' component={Landing}/>*/}
          {/*<Route exact path="/signup" component={Landing}/>*/}
          <Route exact path='/dashboard' component={Dashboard}/>
          {/*<Route exact path='/itin' component={Itinerary}/>*/}
        </BrowserRouter>
      </main>
    )
  }
}

export default App;
