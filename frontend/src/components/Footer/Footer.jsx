import React from 'react'
import './footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
    return (
        <>
            <footer className='footer section-space'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-info">
                                <h2 className='footer-logo'><span>E</span>Shopper</h2>
                                <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
                                <ul>
                                    <li><FaLocationDot className='info-icons'/>123 Street, New York, USA</li>
                                    <li><FaEnvelope className='info-icons'/>info@example.com</li>
                                    <li><FaPhone className='info-icons'/>+012 345 67890</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="footer-links">
                                        <h4>Ouick Links</h4>
                                        <ul>
                                            <li><IoIosArrowForward style={{marginRight: '8px'}}/><a href="#">Home</a></li>
                                            <li><IoIosArrowForward style={{marginRight: '8px'}}/><a href="#">Our Shop</a></li>
                                            <li><IoIosArrowForward style={{marginRight: '8px'}}/><a href="#">Shop Detail</a></li>
                                            <li><IoIosArrowForward style={{marginRight: '8px'}}/><a href="#">Shopping Cart</a></li>
                                            <li><IoIosArrowForward style={{marginRight: '8px'}}/><a href="#">Checkout</a></li>
                                            <li><IoIosArrowForward style={{marginRight: '8px'}}/><a href="#">Contacts</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-links">
                                        <h4>Ouick Links</h4>
                                        <ul>
                                            <li><IoIosArrowForward style={{marginRight: '8px'}}/><a href="#">Home</a></li>
                                            <li><IoIosArrowForward style={{marginRight: '8px'}}/><a href="#">Our Shop</a></li>
                                            <li><IoIosArrowForward style={{marginRight: '8px'}}/><a href="#">Shop Detail</a></li>
                                            <li><IoIosArrowForward style={{marginRight: '8px'}}/><a href="#">Shopping Cart</a></li>
                                            <li><IoIosArrowForward style={{marginRight: '8px'}}/><a href="#">Checkout</a></li>
                                            <li><IoIosArrowForward style={{marginRight: '8px'}}/><a href="#">Contacts</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="footer-form">
                                        <h4>Newsletter</h4>
                                        <form>
                                            <input type="text" placeholder='Your Name'/>
                                            <input type="text" placeholder='Your Email'/>
                                            <button>Subscribe Now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
