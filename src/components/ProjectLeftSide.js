import React from 'react'
import { ReactComponent as GithubSVG } from "../static/Github.svg";
import { ReactComponent as GoTo } from "../static/goTo.svg";

const ProjectLeftSide = ({
    name,
    description,
    githubUrl,
    siteUrl,
    techItems = [],
    image,
}) => {
    return (
        <div className="proj-1">
            <div className="proj-1-rightside">
                <div className="proj-1-links">
                    <h4 className="feat-header">Featured Project</h4>
                </div>
                <div className="proj-1-links">
                    <h5 className="Proj-name">{name}</h5>
                </div>
                <div className="proj-description">
                    <p className="proj-description-text">{description}</p>
                </div>
                <div className="proj-1-links">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubSVG className="github"></GithubSVG>
                    </a>
                    <a href={siteUrl} target="_blank" rel="noopener noreferrer">
                        <GoTo className="go-to"></GoTo>
                    </a>
                </div>
                <ul className="tech-list2">
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
            <div className="proj-1-pic">
                <a href={siteUrl} target="_blank" rel="noopener noreferrer">
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

export default ProjectLeftSide;
