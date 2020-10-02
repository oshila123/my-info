import React, { Fragment } from 'react';
import CarouselComponent from '../components/Carousel/CarouselComponent';
import "./Home.scss";

const Home = () => {

    return (
        <Fragment >

            <div className="main-slider">
                <CarouselComponent />
            </div>

            <div className="about parallax">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-tertiary">
                            <h4>About Me</h4>
                        </div>
                        <div className="col-12 text-quaternary">
                            <div className="row">
                                <div className="col-6">
                                    I am Oshila Gunerathne, 27 years old.
                                    Currently working on a software company by involving in Online booking engines such as flight booking and hotel booking.
                                    BSc. (Hons) in Computer Science Graduated from <a href="https://www.ucd.ie/" className="text-decoration-none text-quaternary university" target="_blank" rel="noopener noreferrer">University College Dublin, Ireland </a>
                                    with Second Class Honours of 2.98 GPA.


                                </div>
                                <div className="col-6">
                                    Oshila Gunerathne
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="about-content">

                </div>
            </div>

        </Fragment>
    )
}

export default Home