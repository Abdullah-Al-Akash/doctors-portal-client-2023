import React from 'react';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
        return (
                <footer className="p-10"
                        style={{
                                background: `url(${footer})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                        }}
                >
                        <div className="footer">
                                <div>
                                        <span className="footer-title">Services</span>
                                        <a className="link link-hover">Emergency Checkup</a>
                                        <a className="link link-hover">Monthly Checkup</a>
                                        <a className="link link-hover">Weekly Checkup</a>
                                        <a className="link link-hover">Deep Checkup</a>
                                </div>
                                <div>
                                        <span className="footer-title">Our Health</span>
                                        <a className="link link-hover">Fluoride Treatment</a>
                                        <a className="link link-hover">Cavity Filling</a>
                                        <a className="link link-hover">Teath Whitening</a>
                                </div>
                                <div>
                                        <span className="footer-title">OUR ADDRESS</span>
                                        <a className="link link-hover">New York - 101010 Hudson</a>
                                </div>
                        </div>
                        <div className='mt-28 text-center'>
                                <p>Copyright © 2023 - All right reserved by Doctors Portal</p>
                        </div>
                </footer>
        );
};

export default Footer;