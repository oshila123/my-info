import React, { Fragment, useEffect, useState } from 'react'
import './About.scss';

import Typical from 'react-typical'
import Clock from 'react-clock';

const About = () => {

    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(
            () => setValue(new Date()),
            1000
        );


        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <Fragment>

            <div className="about parallax">
                <div className="container pt-3 pt-lg-5">
                    <div className="row">
                        <div className="col-12 text-tertiary">
                            <h4>About Me </h4>
                        </div>
                        <div className="col-12 text-quaternary">

                            <Typical
                                steps={['Hello', 1000, 'Hello world!', 500]}
                                loop={Infinity} // amount / times
                                wrapper="p"
                            />

                            <Clock value={value} />

                            I am Oshila Gunerathne, 27 years old.
                            Currently working on a software company by involving in Online booking engines such as flight booking and hotel booking.
                                    BSc. (Hons) in Computer Science Graduated from <a href="https://www.ucd.ie/" className="text-decoration-none text-quaternary university" target="_blank" rel="noopener noreferrer">University College Dublin, Ireland </a>
                                    with Second Class Honours of 2.98 GPA.
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About
