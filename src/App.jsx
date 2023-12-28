import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';

function App() {
  return (
    <>
      <BurgerMenu />
      <Outlet />
    </>
  );
}

export default App;
