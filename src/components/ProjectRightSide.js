import React from "react";
import { ReactComponent as GithubSVG } from "../static/Github.svg";
import { ReactComponent as GoTo } from "../static/goTo.svg";

const ProjectRightSide = ({
    name,
    description,
    githubUrl,
    siteUrl,
    techItems = [],
    image,
}) => {
    return (
        <div className="proj-2">
            <div className="proj-2-rightside">
                <h4 className="feat-header">Featured Project</h4>
                <h5 className="Proj-name">{name}</h5>
                <div className="proj-description">
                    <p className="proj-description-text">{description}</p>
                </div>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubSVG className="github"></GithubSVG>
                </a>
                <a href={siteUrl} target="_blank" rel="noopener noreferrer">
                    <GoTo className="go-to"></GoTo>
                </a>
                <ul className="tech-list2-2">
                    {techItems.map((each) => (
                        <li
                            key={`${each}-${Math.random()}`}
                            className="tech-items"
                        >
                            {each}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="proj-2-pic">
                <a
                    href={siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        style={{ width: "110%" }}
                        src={image}
                        alt={name}
                    />
                </a>
            </div>
        </div>
    );
};

export default ProjectRightSide;
