import React from 'react'
import './People.css'
import a from './Image (1).png'
import b from './Image (2).png'
import c from './Image.png'
import d from './Client Logo.png'

function People() {
  return (
    <div className="people">
        <div className="container">
            <div className="up">
                <h1>What the People Thinks About Us</h1>
            </div>
            <div className="down">
                <div className="box">
                    <div className="c">
                        <div className="l">
                            <img src={a} alt="" />
                        </div>
                        <div className="r">
                            <h3>Nattasha Mith</h3>
                            <span>Sydney, USA</span>
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.</p>
                </div>
                <div className="box">
                    <div className="c">
                        <div className="l">
                            <img src={b} alt="" />
                        </div>
                        <div className="r">
                            <h3>Raymond Galario</h3>
                            <span>Sydney, USA</span>
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been.</p>
                </div>
                <div className="box">
                    <div className="c">
                        <div className="l">
                            <img src={c} alt="" />
                        </div>
                        <div className="r">
                            <h3>Benny Roll</h3>
                            <span>Sydney, USA</span>
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy 
text of the typesetting industry. 
Ipsum has been.</p>
                </div>
            </div>
        </div>
        <img className='ig' src={d} alt="" />
    </div>
  )
}

export default People