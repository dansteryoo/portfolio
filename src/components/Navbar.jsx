import React from "react";
import "../stylesheet/navbar.scss";
import logo_circle from "../static/sqf.svg";

const Navbar = () => {
    const scrollToTop = () => {
        return window.scrollTo(0, 0);
    };

    const scrollToView = (type) => {
        const offset = 200;
        const el = document.querySelector(`#${type}`).offsetTop - offset;
        window.scroll({top: el})
    };

    return (
        <div className="NavContainer">
            <img
                onClick={scrollToTop}
                className="logo"
                src={logo_circle}
                alt="logo"
            ></img>
            <ul>
                <li
                    onClick={() => scrollToView("about-me")}
                    className="first"
                >
                    <div>01.</div>About
                </li>
                <li
                    onClick={() => scrollToView("my-projects")}
                    className="second"
                >
                    <div>02.</div>Projects
                </li>
                <li
                    onClick={() => scrollToView("contact-me")}
                    className="third"
                >
                    <div>03.</div>Contact
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
