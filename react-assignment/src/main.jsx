import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {configureStore } from '@reduxjs/toolkit';
import App from './App';
import './index.css';
import EmployeeReducer from './EmployeeReducer';

const store = configureStore({
  reducer: {
    employees: EmployeeReducer
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
