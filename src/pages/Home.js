import React, { Fragment } from 'react';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import About from '../components/About/About';
// import Scroll from '../components/Scroll/Scroll';
import "./Home.scss";
import Work from '../components/Work/Work';

const Home = () => {

    return (
        <Fragment >



            {/* <Scroll /> */}
            <CarouselComponent />

            <About />


            <Work />

        </Fragment>
    )
}

export default Home