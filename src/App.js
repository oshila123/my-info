import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import Home from '../src/components/pages/Home';
import Work from '../src/components/pages/Work';
import NotFound from '../src/components/pages/NotFound';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Router>
        <div>
          
        <Header />

          <div>
            <Switch>
              <Route path='/' exact component={Home} />

              <Route path='/work' exact component={Work} />

              <Route component={NotFound} />
            </Switch>
          </div>

          <Footer />

        </div>
      </Router>
      
    </div>
  );
}

export default App;
