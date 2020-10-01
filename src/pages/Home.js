import React, { Fragment, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import reactImage from '../assets/img/react.jpg';
// import react2Image from '../assets/img/react-2.jpg';
import angularImage from '../assets/img/angular.jpg';
import macImage from '../assets/img/mac.jpg';
import "./Home.scss";

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <Fragment >

            <div className="slider">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="w-100 img-fluid"
                            src={reactImage}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>ReactJS</h3>
                            <p>collaborate with several commercial ReactJS projects</p>
                            <p>Online Airticket booking search engines</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="w-100 img-fluid"
                            src={angularImage}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Angular</h3>
                            <p>collaborate with several commercial Angular projects</p>
                            <p>Online Hotel booking search engines</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="w-100 img-fluid"
                            src={macImage}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>

            <div className="container">

            </div>

        </Fragment>
    )
}

export default Home