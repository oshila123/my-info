import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Loader from './shared/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
