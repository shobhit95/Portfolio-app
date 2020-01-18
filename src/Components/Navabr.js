import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Introduction from './Introduction';
import Aboutme from './Aboutme';
const Navbar = () => {
    return (
        <div style={{
            backgroundImage: `url('../../images/cover.jpg')`, height: window.screen.height, backgroundSize: 'cover'
        }} id="home">
            <nav className="navbar navbar-expand-lg navbar-light" style={{ position: 'fixed', width: '100%', zIndex: '1' }}>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{ position: 'relative', left: '45%' }}>
                        <a className="nav-item nav-link active" href="#home" style={{ color: "white" }}>Home</a>
                        <a className="nav-item nav-link" href="#about" style={{ color: "white" }}>About</a>
                        <a className="nav-item nav-link" href="#resume" style={{ color: "white" }}>Resume</a>
                        {/* <a className="nav-item nav-link" href="#contact" style={{ color: "white" }}>Contact</a> */}
                    </div>
                </div>
            </nav>
            <Introduction></Introduction>

        </div >
    )
}

export default Navbar;