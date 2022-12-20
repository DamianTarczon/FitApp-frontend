import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinForm from './pages/JoinForm';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Router from './Router';

function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
