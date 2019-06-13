import React from 'react';
import './App.scss';

import Footer from '../Footer/Footer';
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <main>
      <div id="header">
        {/*<h1>Create memories, together.</h1>*/}
      </div>/>
      <Navigation/>
      <Footer/>
    </main>
  );
}

export default App;
