import React, { useState } from 'react'
import './Project.css'
import a from './Image (1).png'
import b from './Image (2).png'
import c from './Image (3).png'
import d from './Image.png'
import e from './_.png'
let k=0;

function Project() {
    const s=[a,b,c,d]
    const [imga,setImga]=useState(a);
    function clia(){
        setImga(s[k]);
        k++;
        if(k>s.length-1){
            k=0;
        }
    }
    const [imgb,setImgb]=useState(b);
    function clib(){
        setImgb(s[k]);
        k++;
        if(k>s.length-1){
            k=0;
        }
    }
    const [imgc,setImgc]=useState(c);
    function clic(){
        setImgc(s[k]);
        k++;
        if(k>s.length-1){
            k=0;
        }
    }
    const [imgd,setImgd]=useState(d);
    function clid(){
        setImgd(s[k]);
        k++;
        if(k>s.length-1){
            k=0;
        }
    }
  return (
    <div className="project">
        <div className="container">
            <div className="up">
                <h1>Follow Our Projects</h1>
                <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            </div>
            <div className="down">
                <div className="k">
                    <div className="box">
                    <img className='i' src={imga} alt="" />
                    <div className="content">
                        <div className="l">
                            <h3>Modern Kitchan</h3>
                            <span>Decor / Artchitecture</span>
                        </div>
                        <div className="r">
                            <img src={e} alt="" onClick={clia} />
                        </div>
                    </div>
                    </div>
                    <div className="box">
                    <img className='i' src={imgb} alt="" />
                    <div className="content">
                        <div className="l">
                            <h3>Modern Kitchan</h3>
                            <span>Decor / Artchitecture</span>
                        </div>
                        <div className="r">
                            <img src={e} alt="" onClick={clib} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="k">
                    <div className="box">
                    <img className='i' src={imgc} alt="" />
                    <div className="content">
                        <div className="l">
                            <h3>Modern Kitchan</h3>
                            <span>Decor / Artchitecture</span>
                        </div>
                        <div className="r">
                            <img src={e} alt="" onClick={clic}/>
                        </div>
                    </div>
                    </div>
                    <div className="box">
                    <img className='i' src={imgd} alt="" />
                    <div className="content">
                        <div className="l">
                            <h3>Modern Kitchan</h3>
                            <span>Decor / Artchitecture</span>
                        </div>
                        <div className="r">
                            <img src={e} alt="" onClick={clid}/>
                        </div>
                    </div>
                    </div>
                </div>
                
                {/* <div className="box">
                    <img src={c} alt="" />
                    <div className="content">
                        <div className="l">
                            <h3>Modern Kitchan</h3>
                            <span>Decor / Artchitecture</span>
                        </div>
                        <div className="r">
                            <img src={e} alt="" />
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img src={d} alt="" />
                    <div className="content">
                        <div className="l">
                            <h3>Modern Kitchan</h3>
                            <span>Decor / Artchitecture</span>
                        </div>
                        <div className="r">
                            <img src={e} alt="" />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Project