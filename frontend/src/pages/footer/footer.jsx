import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
         <div className="footer"  id='footer'>
        <div className="information">
            <div className="row">
                <div className="column">
                    <h4>SDDSM</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h4>products</h4>
                    <ul>
                        <li><a href="#">Earings</a></li>
                        <li><a href="#">Chains</a></li>
                        <li><a href="#">Lockets</a></li>
                        <li><a href="#">Mangalsutras</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h4>online shop</h4>
                    <ul>
                        <li><a href="#">profile</a></li>
                        <li><a href="#">cart</a></li>
                        <li><a href="#">payment</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h4>follow us</h4>
                    <div className="social">
                        <a href="#"><i className="ri-facebook-line"></i></a>
                        <a href="#"><i className="ri-twitter-x-fill"></i></a>
                        <a href="#"><i className="ri-instagram-line"></i></a>
                        <a href="#"><i className="ri-youtube-line"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer