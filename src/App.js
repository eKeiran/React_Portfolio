import React, { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ThemeContext } from './contexts/theme';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div id='top' className={`${themeName} app`}>
      <Header />

      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
