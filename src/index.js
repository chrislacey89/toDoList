import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import './index.css';
import App from './App';
import About from './Components/Pages/About';

import { store, persistor } from './Store/store';

//////////

const app = (
  <Provider store={store}>
    <PersistGate loading={<About />} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
