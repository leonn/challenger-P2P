import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
