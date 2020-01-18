import React from 'react';

const Footer = () => {
    return (
        <footer className="footerCustom">
            <a style={{ color: '#303030' }} href="#home"><i className="fas fa-chevron-circle-up upPosition"></i></a>
            <center style={{ paddingTop: '20px', fontSize: '20px' }}>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/shobhitsahu.25" target='_blank'><i className="fab fa-facebook-f marginRight"></i></a>
                        <a href="https://www.instagram.com/shobhitsahu25/" target='_blank'><i className="fab fa-instagram marginRight"></i></a>
                        <a href="https://www.linkedin.com/in/shobhit-sahu-b46570107/" target='_blank'><i className="fab fa-linkedin-in marginRight"></i></a>
                        <a href="https://github.com/shobhit95" target='_blank'><i className="fab fa-github"></i></a>
                    </li>
                </ul >
            </center >
            <div className="aboutContent">

                <center>

                    <small>
                        &copy; Copyright 2020 Shobhit Sahu
                        </small>
                </center>
            </div>
        </footer >
    )
}

export default Footer;