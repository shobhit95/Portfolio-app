import React from 'react';
import Introduction from './Introduction'
const Navbar = () => {
    return (
        <div style={{
            backgroundImage: `url('../../images/cover.jpg')`, height: window.screen.height, backgroundSize: 'cover'
        }}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{ position: 'relative', left: '45%' }}>
                        <a className="nav-item nav-link active" href="#Home" style={{ color: "white" }}>Home</a>
                        <a className="nav-item nav-link" href="#about" style={{ color: "white" }}>About</a>
                        <a className="nav-item nav-link" href="#contact" style={{ color: "white" }}>Contact</a>
                    </div>
                </div>
            </nav>
            <Introduction />

        </div >
    )
}

export default Navbar;