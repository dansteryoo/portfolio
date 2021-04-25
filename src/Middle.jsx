import React from "react";
import "react-slidedown/lib/slidedown.css";
import "./stylesheet/middle.scss";
import empireImg from "./static/empire.jpg";
import expressImg from "./static/express.png";
import herokuImg from "./static/heroku.png";
import html5Img from "./static/html5.png";
import mongodbImg from "./static/mongodb.png";
import nodejsImg from "./static/nodejs.png";
import postresqlImg from "./static/postgresql.png";
import tsImg from "./static/ts.png";
import graphqlImg from "./static/graphql.png";
import reactjsImg from "./static/reactjs.png";
import reduxImg from "./static/redux.png";
import pythonImg from "./static/python.png";
import djangoImg from "./static/django.png";
import rubyonrailsImg from "./static/rubyonrails.png";
import sassImg from "./static/sass.png";
import chairsbnbImg from "./static/chairsbnb.png";
import wereadtruthImage from "./static/we_read_truth.png";
import vbshelperImage from "./static/vbs_helper.png";
import { ReactComponent as GithubSVG } from "./static/Github.svg";
import { ReactComponent as GoTo } from "./static/goTo.svg";
import { ReactComponent as Folder } from "./static/folder.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "./stylesheet/animate.css";
import Resume from "./static/Danny_Yoo_SWE_Resume.pdf";
import ProjectRightSide from "./components/ProjectRightSide";
import ProjectLeftSide from "./components/ProjectLeftSide";
import { Data } from "./Data";

const VBS_DATA = Data["VBS Helper"];
const TRUTH_DATA = Data["We Read Truth"];
const CHAIRS_DATA = Data["ChairsBnB"];
const TECH_ICONS = [
    tsImg,
    pythonImg,
    nodejsImg,
    djangoImg,
    rubyonrailsImg,
    reactjsImg,
    reduxImg,
    graphqlImg,
    expressImg,
    mongodbImg,
    postresqlImg,
    herokuImg,
    html5Img,
    sassImg,
];
const TECHNOLOGIES = [
    "JavaScript",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Express.js",
    "Postgresql",
    "Python",
    "Django",
    "GraphQL",
    "Ruby On Rails",
    "React + Redux",
    "Heroku",
];

const Middle = () => {
    return (
        <div className="mid-container">
            {/* ---------- TOP ---------- */}

            <div className="mid-top-container">
                <p>Hey world, my name is</p>

                <ScrollAnimation animateIn="fadeIn" delay={200}>
                    <h1 className="name-text">Danny Yoo.</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" delay={400}>
                    <p className="third-text">
                        I'm a software engineer based in Queens, New York
                        specializing in building and designing full stack
                        applications and websites that solves real life problems
                        for real life people. Check out my projs below!
                    </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" delay={500}>
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                        <button className="Get-In-Touch">My Resume</button>
                    </a>
                </ScrollAnimation>
            </div>

            {/* ----------ABOUT ME ---------- */}

            <div className="About-Me-Container" id="about-me">
                <ScrollAnimation animateIn="fadeIn">
                    <div className="About-me-header">About Me</div>
                    <div className="prof-container">
                        <div className="bio-text">
                            <p>
                                Hello! I'm Danny, a software engineer based in
                                Queens, NY. I'm an avid pizza lover, and a loyal
                                sports fanatic to my lowly Jets, Mets, Rangers,
                                and Knicks. I love to learn and I am currently
                                learning to love how to program solutions for
                                real life problems. Some of my upcoming projs
                                are solutions to problems I have personally
                                dealt with throughout my professional career.
                                You can check out my progress below!
                                <br></br>
                                <br></br>
                                Here are a few technologies I've been working
                                with recently:
                            </p>
                            <ul className="tech-list-exp">
                                {TECHNOLOGIES.map((each, i) => {
                                    return (
                                        <li
                                            key={`${each}-${i}`}
                                            className="tech-item"
                                        >
                                            {each}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="profile-pic">
                            <img
                                className="profile-img"
                                src={empireImg}
                                alt="empire-state-building"
                            ></img>
                        </div>
                    </div>
                    <div className="tech-icons">
                        {TECH_ICONS.map((each, i) => {
                            const divId = each.includes("mongo")
                                ? "mongo"
                                : "null";
                            return (
                                <img
                                    id={divId}
                                    key={`${each}-${i}`}
                                    className="tech-img"
                                    src={each}
                                    alt="aboutme-tech-icon"
                                />
                            );
                        })}
                    </div>
                </ScrollAnimation>
            </div>

            {/* ---------- MY PROJECTS ---------- */}

            <div className="Experience-Container" id="my-projects">
                <ScrollAnimation animateIn="fadeIn">
                    <div className="experience-header">My Projects</div>
                </ScrollAnimation>
                <div className="innter-container">
                    {/* ---------- FEATURE: VBS HELPER ---------- */}

                    <ScrollAnimation animateIn="zoomIn">
                        <ProjectLeftSide
                            name={VBS_DATA.name}
                            description={VBS_DATA.description}
                            githubUrl={VBS_DATA.githubUrl}
                            siteUrl={VBS_DATA.siteUrl}
                            techItems={VBS_DATA.techItems}
                            image={vbshelperImage}
                        />
                    </ScrollAnimation>

                    {/* ---------- FEATURE: WE READ TRUTH ---------- */}

                    <ScrollAnimation animateIn="zoomIn">
                        <ProjectRightSide
                            name={TRUTH_DATA.name}
                            description={TRUTH_DATA.description}
                            githubUrl={TRUTH_DATA.githubUrl}
                            siteUrl={TRUTH_DATA.siteUrl}
                            techItems={TRUTH_DATA.techItems}
                            image={wereadtruthImage}
                        />
                    </ScrollAnimation>

                    {/* ---------- FEATURE: CHAIRSBNB ---------- */}

                    <ScrollAnimation animateIn="zoomIn">
                        <ProjectLeftSide
                            name={CHAIRS_DATA.name}
                            description={CHAIRS_DATA.description}
                            githubUrl={CHAIRS_DATA.githubUrl}
                            siteUrl={CHAIRS_DATA.siteUrl}
                            techItems={CHAIRS_DATA.techItems}
                            image={chairsbnbImg}
                        />
                    </ScrollAnimation>

                    {/* ---------- UPCOMING PROJECTS ---------- */}

                    <section className="noteworthy-container">
                        <ScrollAnimation animateIn="fadeIn">
                            <h4 className="header-4">Upcoming Projects</h4>
                        </ScrollAnimation>
                        <div className="noteworthy-projs">
                            <ScrollAnimation animateIn="fadeIn" delay={500}>
                                <div className="note-1">
                                    <div className="inner-cont">
                                        <header>
                                            <div className="top-logo-cont">
                                                <Folder className="folder-svg"></Folder>
                                                <a
                                                    href="https://github.com/dansteryoo/fantasy_fistpump"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <GithubSVG className="github-upcoming"></GithubSVG>
                                                </a>
                                                <a
                                                    href="#"
                                                    rel="noopener noreferrer"
                                                >
                                                    <GoTo className="go-to-upcoming"></GoTo>
                                                </a>
                                            </div>
                                            <h5>Fantasy FistPump</h5>
                                            <div className="descript-note">
                                                A website to help fantasy
                                                football users dominate their
                                                leagues by tracking, sorting,
                                                and analyzing statisical data of
                                                NFL athletes.
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
            <div className="final-container" id="contact-me">
                <a
                    href="mailto:dansteryoo@gmail.com"
                    className="contact-email"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default Middle;