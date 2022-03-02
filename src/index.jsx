import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { UserProvider } from '../src/context/UserContext';

import './style.css';
import { TaskProvider } from './context/TaskContext';

render(
  <React.StrictMode>
    <UserProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
