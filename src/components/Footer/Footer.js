import React from 'react';
import * as moment from 'moment';
import Timer from '../Timer/Timer';
import './Footer.scss';

const Year = () => {
    return (
        moment().format("YYYY")
    )
}

const Footer = () => {
    return (
        <footer className="footer">
            <div className="sub-footer">
                <div className="container">
                    <h4 className="text-md-right pt-2"> <small> <Timer />  </small></h4>
                </div>
            </div>
            <div className="main-footer">
                <div className="container">
                    <h4 >Oshila Gunerathne. <Year /> </h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
