import React from 'react';

import Header from './components/Header';
import Menu from './components/Menu';

import Routes from './routes/routes';

function App() {
  return (
    <>
		  <Header />
      <Menu />
      <main>
        <Routes />
      </main>
    </>
  )
}

export default App;
