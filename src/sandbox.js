import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

// import the two exports from the last code snippet.
import { persistor, store } from './store';
// import your necessary custom components.
import { RootComponent, LoadingView } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
