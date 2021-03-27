import React from "react";
import "./stylesheet/navbar.scss";
import logo_circle from "./static/sqf.svg";

const NavBar = () => {
    const scrollToTop = () => {
        return window.scrollTo(0, 0);
    };
    
    const handleClick = (e) => {
        const scrollHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );

        const windowWidth = window.innerWidth;
        let first = null;
        let second = null;

        if (windowWidth <= 800) {
            first = Math.floor(scrollHeight / 7.8);
            second = Math.floor(scrollHeight / 3.4);
        } else if (windowWidth > 800 && windowWidth <= 1080) {
            first = Math.floor(scrollHeight / 7);
            second = Math.floor(scrollHeight / 3.1);
        } else if (windowWidth > 1080 && windowWidth <= 1380) {
            first = Math.floor(scrollHeight / 6.8);
            second = Math.floor(scrollHeight / 3.1);
        } else if (windowWidth > 1380 && windowWidth <= 1680) {
            first = Math.floor(scrollHeight / 6.5);
            second = Math.floor(scrollHeight / 2.95);
        } else {
            first = Math.floor(scrollHeight / 6.1);
            second = Math.floor(scrollHeight / 2.8);
        }

        if (e.target.className === "first") {
            window.scrollTo(0, first);
        }
        if (e.target.className === "third") {
            window.scrollTo(0, second);
        }
        if (e.target.className === "fourth") {
            window.scrollTo(0, scrollHeight);
        }
    };

    return (
        <div className="NavContainer">
            <img
                onClick={scrollToTop}
                className="logo"
                src={logo_circle}
            ></img>
            <ul>
                <li onClick={(e) => handleClick(e)} className="first">
                    <div>01.</div>About Me
                </li>
                <li onClick={(e) => handleClick(e)} className="third">
                    <div>02.</div>My Projects
                </li>
                <li onClick={(e) => handleClick(e)} className="fourth">
                    <div>03.</div>Contact Me
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
