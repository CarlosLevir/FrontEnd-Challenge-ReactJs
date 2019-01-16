import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import configureStore from './store/store';

const { store } = configureStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
export default App;
