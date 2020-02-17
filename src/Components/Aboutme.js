import React from 'react';

const Aboutme = () => {
    return (
        <section id="about" style={{ height: 'auto' }}>
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="profilepic" src="./public/images/profile.png"></img>
                        </div>
                        <div className="col-md-8">
                            <h2>About Me</h2>
                            <p className="aboutContent">
                                I am an athlete at heart, with an entrepreneurial spirit and a passion for coding.
                                I started my career from Infosys as a system engineer and worked on various web development projects. Initially it was very difficult to uderstand coding for non IT guy but as I get familiar to the different technologies I started enjoying them and followed my interest in UI development.
                            </p>

                            <h2>Contact Details</h2>
                            <span className="aboutContent">Shobhit Sahu</span><br />
                            <span className="aboutContent">Bangalore, India</span><br />
                            <span className="aboutContent">+91 8982-826-233</span><br />
                            <span>shobhitsahu25@gmail.com</span>
                        </div>
                    </div>
                </div>


            </div>
        </section>

    )
}

export default Aboutme;
