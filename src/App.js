import React, { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ThemeContext } from './contexts/theme';
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div id='top' className={`${themeName} app`}>

      </div>
    </BrowserRouter>
  );
}

export default App;
