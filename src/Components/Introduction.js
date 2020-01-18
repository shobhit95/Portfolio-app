import React from 'react';
import { Blob } from 'react-blob';

const Introduction = () => {
    return (
        <section>

            <div className="container">

                {/* <div className="jumbotron">
                    <h1 className="customBanner" style={{ fontSize: '90px', color: '#fff' }}>I'm Shobhit Sahu.</h1>
                    <h3>I'm a <span>Bangalore</span> based <span>Senior Software Engineer</span>, currently employed by <span>OnePoint Global India Pvt Ltd</span> where I work as a <span>UI Developer across the range of our products.</span></h3>
                    <hr></hr>
                    <center>
                        <ul className="social" >
                            <li>
                                <a href="https://www.facebook.com/shobhitsahu.25" target='_blank'><i className="fab fa-facebook-f marginRight"></i></a>
                                <a href="https://www.instagram.com/shobhitsahu25/" target='_blank'><i className="fab fa-instagram marginRight"></i></a>
                                <a href="https://www.linkedin.com/in/shobhit-sahu-b46570107/" target='_blank'><i className="fab fa-linkedin-in marginRight"></i></a>
                                <a href="https://github.com/shobhit95" target='_blank'><i className="fab fa-github"></i></a>
                            </li>
                        </ul>
                    </center>
                </div> */}
                <center>
                    <Blob size="80vh"
                        style={{
                            color: 'white',
                            position: 'relative',
                            top: '100px'
                        }} className="jumbotron"
                    >
                        <div className='row'>
                            <h1 className="customBanner" style={{ fontSize: '90px', color: '#fff' }}>I'm Shobhit Sahu.</h1>
                            <h3>I'm a <span>Bangalore</span> based <span>Senior Software Engineer</span>, currently employed by <span>OnePoint Global India Pvt Ltd</span> where I work as a <span>UI Developer across the range of our products.</span></h3>
                            <br />
                            <hr style={{ width: '100%', borderColor: 'gray' }}></hr>
                            <br /><br />
                            <ul className="social" >
                                <li>
                                    <a href="https://www.facebook.com/shobhitsahu.25" target='_blank'><i className="fab fa-facebook-f marginRight"></i></a>
                                    <a href="https://www.instagram.com/shobhitsahu25/" target='_blank'><i className="fab fa-instagram marginRight"></i></a>
                                    <a href="https://www.linkedin.com/in/shobhit-sahu-b46570107/" target='_blank'><i className="fab fa-linkedin-in marginRight"></i></a>
                                    <a href="https://github.com/shobhit95" target='_blank'><i className="fab fa-github"></i></a>
                                </li>
                            </ul>

                        </div>
                    </Blob>
                </center>
            </div>
        </section>

    )
}

export default Introduction;