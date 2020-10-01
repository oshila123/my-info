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
                                    Oshila Gunerathne
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

            </div>

        </Fragment>
    )
}

export default Home