import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { SnackbarProvider } from 'notistack';

import './index.css';
import App from './App';

import { store, persistor } from './Store/store';

//////////

const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
