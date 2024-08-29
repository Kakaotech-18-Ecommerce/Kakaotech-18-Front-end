import React from 'react';
import './App.css';
import GollaGollaRouter from './router/index.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store.js';

function App() {
  console.log('dd');
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GollaGollaRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
