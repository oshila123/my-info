import React from 'react';
import './Home.scss';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import About from '../components/About/About';
import Work from '../components/Work/Work';
import Projects from '../components/Projects/Projects';
import Technology from '../components/Technology/Technology';
import Scroll from '../components/Scroll/Scroll';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <About />
        <Work />
        <Projects />
        <Technology />
      </main>
      <Scroll />
      <Footer />
    </div>
  );
};

export default Home;
