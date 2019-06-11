import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/main.scss';

import createApplicationStore from './create-store';

import App from './component/App/App';

const store = createApplicationStore();

ReactDOM.render(<Provider store={store}><App/></Provider>,
  document.getElementById('root'));

