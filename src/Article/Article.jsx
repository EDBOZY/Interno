import React from 'react'
import './Article.css'
import a from './Image (1).png'
import b from './Image (2).png'
import c from './Image.png'

function Article() {
  return (
    <div className="article">
        <div className="up">
            <h1>Articles & News</h1>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        </div>
        <div className="down">
            <div className="box">
                <div className="up">
                    <img src={a} alt="" />
                </div>
                <div className="downn">
                    <h2>Let’s Get Solution For Building Construction Work</h2>
                    <div className="bot">
                        <span>26 December,2022 </span>
                        <div className='hi'></div>
                    </div>
                </div>
            </div>
            <div className="box" style={{background:"#F4F0EC"}}>
                <div className="up">
                    <img src={b} alt="" />
                </div>
                <div className="downn">
                    <h2>Low Cost Latest Invented Interior Designing Ideas.</h2>
                    <div className="bot">
                        <span>22 December,2022 </span>
                        <div className='hi' style={{background:"white"}}></div>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="up">
                    <img src={c} alt="" />
                </div>
                <div className="downn">
                    <h2>Best For Any Office & Business Interior Solution</h2>
                    <div className="bot">
                        <span>25 December,2022 </span>
                        <div className='hi'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Article