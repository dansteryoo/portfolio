import React from 'react';
import 'react-slidedown/lib/slidedown.css'
import './stylesheet/middle.scss'
import empireImg from './static/empire.jpg'
import expressImg from './static/express.png'
import herokuImg from './static/heroku.png'
import html5Img from './static/html5.png'
import mongodbImg from './static/mongodb.png'
import nodejsImg from './static/nodejs.png'
import postresqlImg from './static/postgresql.png'
import tsImg from './static/ts.png'
import graphqlImg from './static/graphql.png'
import reactjsImg from './static/reactjs.png'
import reduxImg from './static/redux.png'
import rubyonrailsImg from './static/rubyonrails.png'
import sassImg from './static/sass.png'
import chairsbnb from './static/chairsbnb.png'
import schoolforce from './static/schoolforce.png'
import seefude from './static/seefude.png'
import we_read_truth from './static/we_read_truth.png'
import { ReactComponent as GithubSVG } from './static/Github.svg'
import { ReactComponent as GoTo } from './static/goTo.svg'
import { ReactComponent as Folder } from './static/folder.svg'
import ScrollAnimation from 'react-animate-on-scroll';
import './stylesheet/animate.css'


class Middle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }



    render() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        return (

            <div className="mid-container">
                <div className='mid-top-container'>
                    <p>Hey world, my name is</p>

                    <ScrollAnimation animateIn="fadeIn" delay="200">
                        <h1 className="name-text">Danny Yoo.</h1>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" delay="400">
                        <p className="third-text">
                            I'm a software engineer based in Queens, New York
                            specializing in building and designing full stack applications
                            and websites that solves real life problems for real life people.
                        Check out my projects below!</p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" delay="500">
                        <a href="mailto:dansteryoo@gmail.com"><button className="Get-In-Touch"> Get In Touch </button></a>
                    </ScrollAnimation>
                </div>

                <div className="About-Me-Container">
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="About-me-header">About Me</div>
                        <div className="prof-container">
                            <p className="bio-text">

                                Hello! I'm Danny, a software engineer based in Queens, NY.
                                I'm an avid pizza lover, and a loyal sports fanatic to my lowly Jets, Mets, Rangers, and Knicks. 
                                I love to learn and I am currently learning to love how to program solutions for real life problems. 
                                Some of my upcoming projects are solutions to problems I have personally dealt with throughout my professional career. 
                                You can check out my progress below!

                            <br></br>
                                <br></br>
                                Here are a few technologies I've been working with recently:
                                <ul className="tech-list-exp">
                                    <li className="tech-item">JavaScript</li>
                                    <li className="tech-item">Node.js</li>
                                    <li className="tech-item">MongoDB</li>
                                    <li className="tech-item">TypeScript</li>
                                    <li className="tech-item">Express.js</li>
                                    <li className="tech-item">Postgresql</li>
                                    <li className="tech-item">Ruby On Rails</li>
                                    <li className="tech-item">GraphQL</li>
                                    <li className="tech-item">Heroku</li>
                                    <li className="tech-item">HTML & Sass</li>
                                    <li className="tech-item">React + Redux</li>
                                </ul>
                            </p>
                            <div className="profile-pic">
                                <img className="profile-img" src={empireImg} alt="empire-state-building"></img>
                            </div>
                        </div>
                        <div className="tech-icons">
                            <img className="tech-img" src={tsImg} alt="aboutme-tech-icon"></img>
                            <img className="tech-img" src={nodejsImg} alt="aboutme-tech-icon"></img>
                            <img className="tech-img" src={expressImg} alt="aboutme-tech-icon"></img>
                            <img className="tech-img" src={reactjsImg} alt="aboutme-tech-icon"></img>
                            <img className="tech-img" src={reduxImg} alt="aboutme-tech-icon"></img>
                            <img className="tech-img" src={graphqlImg} alt="aboutme-tech-icon"></img>
                            <img className="tech-img" src={rubyonrailsImg} alt="aboutme-tech-icon"></img>
                            <img className="tech-img" src={mongodbImg} alt="aboutme-tech-icon"></img>
                            <img className="tech-img" src={postresqlImg} alt="aboutme-tech-icon"></img>
                            <img className="tech-img" src={herokuImg} alt="aboutme-tech-icon"></img>
                            <img className="tech-img" src={html5Img} alt="aboutme-tech-icon"></img>
                            <img className="tech-img" src={sassImg} alt="aboutme-tech-icon"></img>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="Experience-Container">
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="experience-header">My Projects</div>
                    </ScrollAnimation>
                    <div className="innter-container">

                        {/* ---------- FEATURE PROJECT 1 ---------- */}

                        <ScrollAnimation animateIn="zoomIn">
                            <div className="Project-1">
                                <div className="project-2-rightside">
                                    <h4 className="feat-header">Featured Project</h4>
                                    <h5 className="Proj-name">We Read Truth</h5>
                                    
                                    <div className="proj-description">
                                        <p className="proj-description-text">
                                            A website where users can journal their devotionals using the "She Reads Truth" and "He Reads Truth" content.
                                    </p>
                                    </div>
                                    <a href="https://github.com/dansteryoo/we_read_truth" target="_blank" rel="noopener noreferrer"><GithubSVG className="github"></GithubSVG></a>
                                    <a href="https://wereadtruth.app/" target="_blank" rel="noopener noreferrer"><GoTo className="go-to"></GoTo></a>

                                    <ul className="tech-list2-2">
                                        <li className="tech-items">Ruby on Rails</li>
                                        <li className="tech-items">React + Redux</li>
                                        <li className="tech-items">Postgresql</li>
                                        <li className="tech-items">Nokogiri Gem</li>
                                        <li className="tech-items">HTTParty Gem</li>
                                    </ul>
                                </div>

                                <img className="project-2-pic" src={we_read_truth} alt="wereadtruth"></img>

                            </div>
                        </ScrollAnimation>

                        {/* ---------- FEATURE PROJECT 2 ---------- */}

                        <ScrollAnimation animateIn="zoomIn">
                            <div className="Project-1">
                                <div className="project-1-rightside">
                                    <h4 className="feat-header">Featured Project</h4>
                                    <h5 className="Proj-name">ChairsBnB</h5>
                                    <div className="proj-description">
                                        <p className="proj-description-text">
                                            A website for solo travelers who can rent single chairs around the world inspired by Airbnb.
                                    </p>
                                    </div>
                                    <a href="https://github.com/dansteryoo/chairsbnb" target="_blank" rel="noopener noreferrer"><GithubSVG className="github"></GithubSVG></a>
                                    <a href="http://chairsbnb.herokuapp.com/" target="_blank" rel="noopener noreferrer"><GoTo className="go-to"></GoTo></a>
                                    <ul className="tech-list2">
                                        <li className="tech-items">Ruby On Rails</li>
                                        <li className="tech-items">React + Redux</li>
                                        <li className="tech-items">AWS(S3)</li>
                                        <li className="tech-items">Postgresql</li>
                                    </ul>
                                
                                </div>

                                <img className="project-1-pic" src={chairsbnb} alt="chairsbnb"></img>

                            </div>
                        </ScrollAnimation>

                        {/* ---------- FEATURE PROJECT 3 ---------- */}

                        <ScrollAnimation animateIn="zoomIn">
                            <div className="Project-1">
                                <div className="project-2-rightside">
                                    <h4 className="feat-header">Featured Project</h4>
                                    <h5 className="Proj-name">SchoolForce</h5>
                                    <div className="proj-description">
                                        <p className="proj-description-text">
                                            A “CRM” web application that allows schools to send reminders to parents via SMS messaging. 
                                    </p>
                                    </div>
                                    <a href="https://github.com/dansteryoo/SchoolForce-1" target="_blank" rel="noopener noreferrer"><GithubSVG className="github"></GithubSVG></a>
                                    <a href="http://school-force.herokuapp.com/" target="_blank" rel="noopener noreferrer"><GoTo className="go-to"></GoTo></a>
                                    <ul className="tech-list2-2">
                                        <li className="tech-items">MongoDB</li>
                                        <li className="tech-items">Express.js</li>
                                        <li className="tech-items">React + Redux</li>
                                        <li className="tech-items">Node.js</li>
                                        <li className="tech-items">Twilio API</li>
                                    </ul>
                                
                                </div>

                                <img className="project-2-pic" src={schoolforce} alt="schoolforce"></img>

                            </div>
                        </ScrollAnimation>

                        {/* ---------- FEATURE PROJECT 4 ---------- */}

                        <ScrollAnimation animateIn="zoomIn">
                            <div className="Project-1">
                                <div className="project-1-rightside">
                                    <h4 className="feat-header">Featured Project</h4>
                                    <h5 className="Proj-name">SeeFude.com</h5>
                                    <div className="proj-description">
                                        <p className="proj-description-text">
                                        A data visualization site that helps users make healthier food choices by tracking their nutritional facts.
                                        </p>
                                    </div>

                                    <a href="https://github.com/dansteryoo/seefude.com" target="_blank" rel="noopener noreferrer"><GithubSVG className="github"></GithubSVG></a>
                                    <a href="https://dansteryoo.io/seefude.com" target="_blank" rel="noopener noreferrer"><GoTo className="go-to"></GoTo></a>
                                    <ul className="tech-list2">
                                        <li className="tech-items">JavaScript</li>
                                        <li className="tech-items">D3.js</li>
                                        <li className="tech-items">HTML5</li>
                                        <li className="tech-items">Sass</li>
                                    </ul>
                                
                                </div>

                                <img className="project-1-pic" src={seefude} alt="seefude"></img>
                            </div>
                        </ScrollAnimation>


                        <section className="noteworthy-container">
                            <ScrollAnimation animateIn="fadeIn">
                                <h4 className="header-4">Upcoming Projects</h4>
                            </ScrollAnimation>
                            <div className="noteworthy-projects">
                                <ScrollAnimation animateIn="fadeIn" delay="300">
                                    <div className="note-1">
                                        <div className="inner-cont">
                                            <header>
                                                <div className="top-logo-cont">


                                                    <Folder className="folder-svg"></Folder>
                                                    <a href="https://github.com/dansteryoo/vbshelper" target="_blank" rel="noopener noreferrer"><GithubSVG className="github-upcoming"></GithubSVG></a>
                                                    <a href="" target="_blank" rel="noopener noreferrer"><GoTo className="go-to-upcoming"></GoTo></a>
                                                </div>
                                                <h5>VBS Helper</h5>
                                                <div className="descript-note">
                                                    A “CRM” website that allows churches to collect, organize, and manage student registration while also allowing communication with parents via SMS messaging.
                                                </div>
                                            </header>
                                            <footer>
                                                <ul className="tech-list">
                                                    <li>MongoDB</li>
                                                    <li>Express</li>
                                                    <li>GraphQL</li>
                                                    <li>React</li>
                                                    <li>Node.js</li>
                                                </ul>
                                            </footer>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeIn" delay="500">
                                    <div className="note-1">
                                        <div className="inner-cont">
                                            <header>
                                                <div className="top-logo-cont">




                                                    <Folder className="folder-svg"></Folder>
                                                    <a href="https://github.com/dansteryoo/fantasy_fistpump" target="_blank" rel="noopener noreferrer"><GithubSVG className="github-upcoming"></GithubSVG></a>
                                                    <a href="" target="_blank" rel="noopener noreferrer"><GoTo className="go-to-upcoming"></GoTo></a>
                                                </div>
                                                <h5>Fantasy FistPump</h5>
                                                <div className="descript-note">
                                                    A website to help fantasy football users dominate their leagues by tracking, sorting, and analyzing statisical data of NFL athletes. 
                                                </div>
                                            </header>
                                            <footer>
                                                <ul className="tech-list">
                                                    <li>TBD</li>
                                                    <li>TBD</li>
                                                </ul>
                                            </footer>
                                        </div>
                                    </div>
                                </ScrollAnimation>

                          </div>
                        </section>

                        
                    </div>
                </div>
                <div className="final-container">
                    <div className="final-part">What's Next?</div>
                    <div className="final-text">As of {today} I am looking for a software engineer position in the New York Metropolitan area. If you think I would be a good fit for your company
                    please don't hesitate to reach out to me!
                    </div>
                    <a href="mailto:dansteryoo@gmail.com" className="contact-email" target="_blank" rel="noopener noreferrer">Contact Me</a>
                </div>
            </div>

        )
    }
}

export default Middle;


// <img className="profile-img" src={profileImg}></img>

// <ScrollAnimation animateIn="fadeIn" delay="300">
//     <h1 className="second-text">  </h1>
// </ScrollAnimation>

// <ScrollAnimation animateIn="fadeIn" delay="500">
//     <div className="note-1">
//         <div className="inner-cont">
//             <header>
//                 <div className="top-logo-cont">




//                     <Folder className="folder-svg"></Folder>
//                     <a href="https://github.com/dansteryoo/BenchBnB-2" target="_blank" rel="noopener noreferrer"><GoTo className="go-to"></GoTo></a>
//                 </div>
//                 <h5>BenchBnB</h5>
//                 <div className="descript-note">
//                     a Lite version of AirBnB with benches instead!
//                                                 </div>
//             </header>
//             <footer>
//                 <ul className="tech-list">
//                     <li>React.js</li>
//                     <li>Redux.js</li>
//                     <li>Postgres</li>
//                     <li>Ruby on Rails</li>
//                 </ul>
//             </footer>
//         </div>
//     </div>
// </ScrollAnimation>