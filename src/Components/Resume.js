import React from 'react';

const Resume = () => {
    return (
        <section id="resume">
            <div className="container resume">
                <div className="row">
                    <div className="col-md-3 col-sm-3">
                        <h4><span className="borderBottom">EDUCATION</span></h4>
                    </div>
                    <div className="col-md-8 col-sm-6">
                        <h5>RGPV University, Bhopal (M.P.)</h5>
                        <span className="resumeContent">Bachelor of Engineering in Electronics and Communication from Lakshmi Narain College of Technology, Bhopal <span class="dot"></span> July 2012 - July 2016</span>
                    </div>
                    <hr style={{ width: '100%', margin: '40px 0px 40px 0px' }} />
                    <div className="col-md-3 col-sm-3">
                        <h4><span className="borderBottom">WORK</span></h4>
                    </div>
                    <div className="col-md-8 col-sm-6">
                        <h4>OnePoint Global India Pvt Ltd</h4>
                        <span className="resumeContent">Senior Software Engineer <span class="dot"></span> July 2019 - Present</span>
                        <p className="aboutContent" style={{ marginTop: '25px' }}>
                            It's a Leading Product based company (Mobile Survey Technology Specialist). Here I am working as UI Developer for web application based products where  clients can create a survey for web or mobile link to schedule survey for its users. I am involved in developing new modules as per the client requirements which includes technologies like HTML5, CSS3, Bootstrap, AngularJs, Javascript and jQuery.
                        </p>
                        <h4>Infosys Ltd</h4>
                        <span className="resumeContent">Senior Systems Engineer <span class="dot"></span> Oct 2016 - March 2019</span>
                        <p className="aboutContent" style={{ marginTop: '25px' }}>
                            It's a global leader in technology services & consulting. I started my IT career here and after successful completion of 6 months of training in various technologies, I was deployed into web development projects. Here I learned developing web application from end to end which includes technologies like HTML5, CSS3, Bootstrap, ReactJs, PHP, MySql, NodeJS and worked in agile environment to meet the project deadlines.
                        </p>
                    </div>
                    <hr style={{ width: '100%', margin: '40px 0px 40px 0px' }} />
                    <div className="col-md-3 col-sm-3">
                        <h4><span className="borderBottom">FAVOURITE TECH</span></h4>
                    </div>
                    <div className="col-md-8 col-sm-6">
                        <h5 className="aboutContent">I'm always interested in playing around with new technologies but these are the ones that have really won me over</h5>
                    </div>
                    <div style={{ marginTop: '60px' }}>
                        <ul className="flex">
                            <div className="flexContent">
                                <img className="imageIcon" src="public/images/html_icon.png"></img>
                                <h4>HTML5</h4>
                                <p className="aboutContent">
                                    It is the first basic and the most coolest thing I learned while developing a web application.
                                </p>
                            </div>
                            <div className="flexContent">
                                <img className="imageIcon" src="../../images/bootstrap_icon.png"></img>
                                <h4>Bootstrap4</h4>
                                <p className="aboutContent">
                                    I use Bootstrap more often than not when designing the layout for my sites. It is the framework I am most familiar with and can therefore design more quickly.
                                </p>
                            </div>
                            <div className="flexContent">
                                <img className="imageIcon" src="../../images/js_icon.png"></img>
                                <h4>Javascript</h4>
                                <p className="aboutContent">
                                    This is the first scripting language I started working and its flexibility to interact with DOM and its continuous advancement makes me more attractive to play with it.
                                </p>
                            </div>
                            <div className="flexContent">
                                <img className="imageIcon" src="../../images/react_icon.png"></img>
                                <h4>ReactJs</h4>
                                <p className="aboutContent">
                                    When I was new to React and really did not like it at first. It has grown on me though and from hat point I started liking it and enjoying working on it.
                                </p>
                            </div>
                            <div className="flexContent">
                                <img className="imageIcon" src="../../images/node_icon.png"></img>
                                <h4>NodeJs</h4>
                                <p className="aboutContent">
                                    Since I want to learn server side scripting language so I choose NodeJs and it is really a nice experience with it.
                                </p>
                            </div>
                            <div className="flexContent">
                                <img className="imageIcon" src="../../images/git_icon.png"></img>
                                <h4>Git</h4>
                                <p className="aboutContent">
                                    I use Git for all of my projects so far. I have used Git for version control in my projects and have toyed around with contributing to Open Source Projects.
                                </p>
                            </div>
                            <div className="flexContent">
                                <img className="imageIcon" src="../../images/heroku_icon.png"></img>
                                <h4>Heroku</h4>
                                <p className="aboutContent">
                                    I use Heroku as my hosting platform for most of my projects because so far they are all unpaid and their free tier is convenient. I also appreciate its integration with Github for such simple deployment.
                                </p>
                            </div>
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Resume;
