import React, { Fragment } from 'react';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
