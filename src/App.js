import React from 'react';
import './App.css';

import UserProvider from './providers/UserProvider';

import Login from './componentes/Login/Login'

//Firebase


function App() {
  return (
    <UserProvider>
        <Login />
    </UserProvider>
  );
}

export default App;
