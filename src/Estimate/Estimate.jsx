import React from 'react'
import './Estimate.css'
import a from './Call Icon.png'
import b from './Photo.jpg'

function Estimate() {
  return (
    <div className="esti">
        <div className="left">
            <h1>We Create The Art
Of Stylish Living
Stylishly</h1>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page 
when lookings at its layouts the points of using 
that it has a more-or-less normal.</p>
            <div className="c">
                <div className="l">
                    <img src={a} alt="" />
                </div>
                <div className="r">
                    <h3>012345678</h3>
                    <span>Call Us Anytime</span>
                </div>
            </div>
            <button>Get Free Estimate</button>
        </div>
        <div className="right">
            <img src={b} alt="" />
        </div>
    </div>
  )
}

export default Estimate