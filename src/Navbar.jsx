import React from 'react';
// import { ReactComponent as Logo } from './solvent.svg';
import './stylesheet/navbar.scss'
import Resume from './static/Danny_Yoo_SWE_Resume.pdf'
import logo_circle from './static/sqf.svg'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    handleClick(e) {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        let windowWidth = window.innerWidth;
        let first;
        let second;


        if (windowWidth <= 800) {
            first = Math.floor((scrollHeight / 7.4))
            second = Math.floor((scrollHeight / 3.2))

        } else if (windowWidth > 800 && windowWidth <= 1080) {
            first = Math.floor((scrollHeight / 7))
            second = Math.floor((scrollHeight / 3))

        } else if (windowWidth > 1080 && windowWidth <= 1380) {
            first = Math.floor((scrollHeight / 6.6))
            second = Math.floor((scrollHeight / 2.8))

        } else if (windowWidth > 1380 && windowWidth <= 1680) {
            first = Math.floor((scrollHeight / 6.3))
            second = Math.floor((scrollHeight / 2.75))
        } else {
            first = Math.floor((scrollHeight / 6))
            second = Math.floor((scrollHeight / 2.7))
        }

        if (e.target.className === 'first') {
            window.scrollTo(0, first)
        }
        if (e.target.className === 'third') {
            window.scrollTo(0, second)
        }
        if (e.target.className === 'fourth') {
            window.scrollTo(0, scrollHeight)
        }
    }

    
    render() {
        return (
            <div className="NavContainer">
                <a href="#" alt="home">
                    <img className="logo" src={logo_circle}></img>
                </a>
                <ul>
                    <li onClick={this.handleClick.bind(this)} className="first"><div>01.</div>About Me</li>
                    <li onClick={this.handleClick.bind(this)} className="third"><div>02.</div>My Projects</li>
                    <li onClick={this.handleClick.bind(this)} className="fourth"><div>03.</div>Contact Me</li>
                    <li onClick={this.handleClick.bind(this)} className="fifth"><a href={Resume} target="_blank" rel="noopener noreferrer">
                    <button className="resume-button">My Resume</button></a></li>
                </ul>

            </div>
        )
    }
}

export default NavBar;
