import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import reactImage from '../../assets/img/react.jpg';
// import react2Image from '../../assets/img/react-2.jpg';
import angularImage from '../../assets/img/angular.jpg';
import macImage from '../../assets/img/mac.jpg';
import './CarouselComponent.scss';

const CarouselComponent = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="slider">
            <Carousel activeIndex={index} onSelect={handleSelect} pause={false}>
                <Carousel.Item>
                    <img
                        className="w-100 img-fluid"
                        src={reactImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="content-overlay-topic mb-2">ReactJS</h3>
                        <p className="content-overlay">collaborate with several commercial ReactJS projects</p>
                        <p className="content-overlay">Online Airticket booking search engines</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 img-fluid"
                        src={angularImage}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="content-overlay-topic mb-2">Angular</h3>
                        <p className="content-overlay">collaborate with several commercial Angular projects</p>
                        <p className="content-overlay">Online Hotel booking search engines</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 img-fluid"
                        src={macImage}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="content-overlay-topic mb-2">Third slide label</h3>
                        <p className="content-overlay">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <p className="content-overlay">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselComponent
