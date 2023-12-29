import React from 'react'
import './Footer.css'
import a from './Logo.svg'

function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="box">
                <img src={a} alt="" />
                <p>It is a long established fact that a reader will be distracted lookings.</p>
                <div className="icon">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div>
            <div className="box">
                <h2>Pages</h2>
                <span>About Us</span>
                <span>Our Projects</span>
                <span>Our Team</span>
                <span>Our Prices</span>
                <span>Services</span>
            </div>
            <div className="box">
                <h2>Services</h2>
                <span>Kitchan</span>
                <span>Living Area</span>
                <span>Bathroom</span>
                <span>Dinning Hall</span>
                <span>Bedroom</span>
            </div>
            <div className="box contact">
                <h2>Contact</h2>
                <span>contact@interno.com</span>
                <span>(123) 456 - 7890</span>
            </div>
        </div>
    </div>
  )
}

export default Footer