import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { UserProvider } from '../src/context/UserContext';

import './style.css';
import { TaskProvider } from './context/TaskContext';
import { BrowserRouter } from 'react-router-dom';

render(
  <React.StrictMode>
    <UserProvider>
      <TaskProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TaskProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
