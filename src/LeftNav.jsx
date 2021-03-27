import React from "react";
import { ReactComponent as LinkedInSVG } from "./static/linkedIn.svg";
import { ReactComponent as GithubSVG } from "./static/Github.svg";
import { ReactComponent as AngelSVG } from "./static/angel.svg";

import "./stylesheet/left.scss";

const LeftNav = () => {
    return (
        <div className="left-container">
            <a
                href="https://www.linkedin.com/in/dansteryoo/"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                <LinkedInSVG className="linked-in"></LinkedInSVG>
            </a>
            <a
                href="https://github.com/dansteryoo"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                <GithubSVG className="github"></GithubSVG>
            </a>
            <a
                href="https://angel.co/u/dansteryoo"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                <AngelSVG className="angel"></AngelSVG>
            </a>
        </div>
    );
};

export default LeftNav;
