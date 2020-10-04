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
                <div className="container pt-3 pt-lg-5">
                    <div className="row">
                        <div className="col-12 text-tertiary">
                            <h4>About Me</h4>
                        </div>
                        <div className="col-12 text-quaternary">
                            I am Oshila Gunerathne, 27 years old.
                            Currently working on a software company by involving in Online booking engines such as flight booking and hotel booking.
                                    BSc. (Hons) in Computer Science Graduated from <a href="https://www.ucd.ie/" className="text-decoration-none text-quaternary university" target="_blank" rel="noopener noreferrer">University College Dublin, Ireland </a>
                                    with Second Class Honours of 2.98 GPA.
                        </div>
                    </div>
                </div>
            </div>

            <div className="experience parallax">
                <div className="container pt-3 pt-lg-5">
                    <div className="row">
                        <div className="col-12 text-tertiary">
                            <h4>Working Experience</h4>
                        </div>
                        <div className="col-12 text-quaternary">
                            <div className="oganro">
                                <div className="row">
                                    <div className="col-4">
                                        <h5>Oganro Ltd - TRAINEE UI DEVELOPER</h5>
                                        <p>January 1<sup>st</sup> 2020 to present</p>
                                    </div>
                                    <div className="col-8">
                                        <ul>
                                            <li>Responsible in doing UI developments. Both scratch to final production as well UI modifications.</li>
                                            <li>Online booking engines like Flight booking, Hotel booking web applications.</li>
                                            <li>Wordpress plugins</li>
                                        </ul>

                                        •	Main responsible with the front-end development as well as modifications.
•	Online travel portal developments for hotels and airline bookings.
•	Using ReactJS, Angular, JavaScript, HTML, CSS, Bootstrap, WordPress.

                                    </div>
                                </div>
                            </div>
                            <div className="lankabell">
                                <div className="row">
                                    <div className="col-4">
                                        <h4>Lankabell Ltd - WEB DESIGNER</h4>
                                        <p>October 2018 – July 2019</p>
                                    </div>
                                    <div className="col-8">
                                        •	Maintained, updated all Lanka Bell relevant web sites including Lanka Bell Cooperate web site.
                                        •	Update and maintain Intranet site (Internal web site to the Lanka Bell staff).

                                    </div>
                                </div>
                            </div>
                            <div className="twc">
                                <div className="row">
                                    <div className="col-4">
                                        <h4>twc Ltd - INTERNSHIP PROGRAMME – SOFTWARE ENGINEER</h4>
                                        <p>December 2017 – July 2018</p>
                                    </div>
                                    <div className="col-8">
                                        •	Responsible with front end changers as well as backend developing, updating sites and modifications to websites.
                                        •	Used ReactJS, PHP, HTML, CSS, Bootstrap, JavaScript, MySQL.

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Home