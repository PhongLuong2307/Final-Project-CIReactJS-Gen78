import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeHeader = () => {
    return (
        <React.Fragment>
            {/* Home Carousel */}

            <div className="carousel">
                <Carousel autoPlay showThumbs={false}>
                    <div>
                        <img src="assets/img/img1.jpg" alt="" />
                        <div className="sliderText-container">
                            <div className="sliderText-content">
                                <h1 className="slider-title">Show your</h1>
                                <h1 className="slider-title">schedule</h1>
                                <h2 className="slide-subtitle">Organize and visualize your week</h2>
                                <h2 className="slide-subtitle"> with build-in timetable</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="assets/img/img2.jpg" alt="" />
                        <div className="sliderText-container">
                            <div className="sliderText-content">
                                <h1 className="slider-title">Top notch</h1>
                                <h1 className="slider-title">experience</h1>
                                <h2 className="slide-subtitle">Medicenter is a responsive template</h2>
                                <h2 className="slide-subtitle">perfect for all screen sizes</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="assets/img/img3.jpg" alt="" />
                        <div className="sliderText-container">
                            <div className="sliderText-content">
                                <h1 className="slider-title">Build it</h1>
                                <h1 className="slider-title">your way</h1>
                                <h2 className="slide-subtitle">Limitless possibilities with multiple</h2>
                                <h2 className="slide-subtitle">page layouts and different shortcodes</h2>
                            </div>
                        </div>
                    </div>
                </Carousel>

                <div className="homebox-container">
                    <div className="homebox-content">
                        <div className="home_box light-blue">
                            <h3 className="homeBox-title">Emergency Case</h3>
                            <p className="homeBox-p">
                                If you need a doctor urgently outside of medicenter opening hours,
                                call emergency appointment number for emergency service.
                            </p>
                            <Link to=''>
                                <button className="homeBox-btn light-blue">Read More</button>
                            </Link>
                        </div>
                        <div className="home_box blue">
                            <h3 className="homeBox-title">Doctors Timetable</h3>
                            <p className="homeBox-p">
                                Here at medicenter we have individual doctor's lists.
                                Click read more below to see services and current timetable for our doctors.
                            </p>
                            <Link to=''>
                                <button className="homeBox-btn blue">Read More</button>
                            </Link>
                        </div>
                        <div className="home_box dark-blue">
                            <h3 className="homeBox-title">Opening Hours</h3>
                            <ul className="openTime-container">
                                <li className="openTime-item">
                                    <span className="openDay">Monday - Friday</span>
                                    <span className="openTime">8.00 - 17.00</span>
                                </li>
                                <li className="openTime-item">
                                    <span className="openDay">Saturday</span>
                                    <span className="openTime">9.30 - 17.30</span>
                                </li>
                                <li className="openTime-item">
                                    <span className="openDay">Sunday</span>
                                    <span className="openTime">9.30 - 15.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomeHeader;