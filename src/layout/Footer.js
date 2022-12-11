import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className="footer-content">
                    <div className="footerBannerBox-container">
                        <div className="footerBannerBox light-blue">
                            <h3 className="footerBannerBox-title">Health Insurance</h3>
                            <p className="">Here in medicenter we have individual</p>
                        </div>
                        <div className="footerBannerBox blue">
                            <h3 className="footerBannerBox-title">Medical Records</h3>
                            <p className="">Here in medicenter we have individual</p>
                        </div>
                        <div className="footerBannerBox dark-blue">
                            <h3 className="footerBannerBox-title">Online Bill Pay</h3>
                            <p className="">Here in medicenter we have individual</p>
                        </div>
                    </div>

                    <div className="footerBox-container">
                        <div className="footerBox">
                            <h3 className="footerBox-title">Medicenter Clinic</h3>
                            <div className="line"></div>
                            <p className="c909090 lh-1.5">Mauris adipiscing mauris fringilla turpis interdum sed pulvinar nisi malesuada individual.</p>
                            <br />
                            <p className="c909090 addressItem lh-1.5">Medicenter Clinic </p>
                            <p className="c909090 addressItem lh-1.5">33 Farlane Street <span>+123 655 655</span></p>
                            <p className="c909090 addressItem lh-1.5">Keilor East <span>+123 755 755</span></p>
                            <p className="c909090 addressItem lh-1.5">VIC 3033, Australia <span style={{ color: "white" }}>medicenter@mail.com</span></p>
                            <div className="social-container">
                                <i className="social-icon fa-brands fa-square-facebook"></i>
                                <i className="social-icon fa-brands fa-square-twitter"></i>
                                <i className="social-icon fa-brands fa-square-google-plus"></i>
                                <i className="social-icon fa-solid fa-square-envelope"></i>
                            </div>
                        </div>
                        <div className="footerBox">
                            <h3 className="footerBox-title">Latest Posts</h3>
                            <div className="line"></div>
                            <ul className="footerPost-container">
                                <Link style={{ textDecoration: 'none' }}>
                                    <li className="footerPost-title">
                                        Handbook of information to support patients receiving radiation therapy to the head and neck area
                                    </li>
                                </Link>
                                <Link style={{ textDecoration: 'none' }}>
                                    <li className="footerPost-title">
                                        Important notes before a general health check
                                    </li>
                                </Link>
                                <Link style={{ textDecoration: 'none' }}>
                                    <li className="footerPost-title">
                                        Adrenal gland tumor treatment methods
                                    </li>
                                </Link>
                                <Link style={{ textDecoration: 'none' }}>
                                    <li className="footerPost-title">
                                        Factors affecting the choice of treatment for uterine fibroids
                                    </li>
                                </Link>
                                <Link style={{ textDecoration: 'none' }}>
                                    <li className="footerPost-title">
                                        Laparoscopic surgery with robot supports kidney cancer treatment
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <div className="footerBox">
                            <h3 className="footerBox-title">Latest Tweets</h3>
                            <div className="line"></div>
                            <ul className="footerTweet-container">
                                <li className="c909090 mb-3 footerTweet-title">
                                    We've released new version (v4.3)
                                    of our #Ajax #Multi #Upload #WP #Plugin.
                                    Please check at #CodeCanyon <span style={{ color: '#D5D5D5' }}>t.co/gcIWQaj7Im</span>
                                </li>
                                <li className="c909090 mb-3 footerTweet-title">
                                    We've released new version (v4.3)
                                    of our #Ajax #Multi #Upload #WP #Plugin.
                                    Please check at #CodeCanyon <span style={{ color: '#D5D5D5' }}>t.co/gcIWQaj7Im</span>
                                </li>
                                <li className="c909090 mb-3 footerTweet-title">
                                    We've released new version (v4.3)
                                    of our #Ajax #Multi #Upload #WP #Plugin.
                                    Please check at #CodeCanyon <span style={{ color: '#D5D5D5' }}>t.co/gcIWQaj7Im</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyRight-container c909090">
                        © Copyright - <span style={{ color: '#D5D5D5' }}>MediCenter Template</span> by <span style={{ color: '#D5D5D5' }}>Phong Luong</span>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;