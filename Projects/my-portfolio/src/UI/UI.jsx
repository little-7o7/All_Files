import React from 'react';
import "./UI.css";
import logoSvg from "./../images/logo.svg";
import img_7o7 from "./../images/7o7.png";

const UI = () => {
    return (
        <div className='UI'>
            <header>
                <div className="top">
                    <a className="logo" href=''>
                        <img src={logoSvg} alt="" />
                        <h3>little_7o7</h3>
                    </a>
                    <div className="navbar">
                        <a href="">
                            <h4>Home</h4>
                            <div></div>
                        </a>
                        <a href="">
                            <h4>About me</h4>
                            <div></div>
                        </a>
                        <a href="">
                            <h4>Portfolio</h4>
                            <div></div>
                        </a>
                        <a href="">
                            <h4>Contact</h4>
                            <div></div>
                        </a>
                    </div>
                </div>

                <div className="bottom">
                    <div className="left">
                        <h2>Hello</h2>
                        <h1>I'M MUNISKHONOV MAKHMUDKHON</h1>
                        <p>
                            I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me
                        </p>
                        <button>Contact me</button>
                    </div>
                    <div className="right">
                        <img src={img_7o7} alt="" />
                    </div>
                </div>
            </header>
            
            <main>
                <div className="components">
                    
                </div>
            </main>
        </div>
    );
};

export default UI;