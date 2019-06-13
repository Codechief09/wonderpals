import React from 'react';
import './App.scss';

import Footer from '../Footer/Footer';
import Navigation from "../Navigation/Navigation";

import {Box} from "@material-ui/core";

function App() {
  return (
    <main>
      <div id="header">
        <Box>
          <h1>Create memories, together.</h1>
        </Box>
      </div>
      <Navigation/>
      <Footer/>
    </main>
  );
}

export default App;
