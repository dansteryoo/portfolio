import React from 'react';
import { ReactComponent as GithubSVG } from '../static/Github.svg';
import { ReactComponent as GoTo } from '../static/goTo.svg';
import ScrollAnimation from 'react-animate-on-scroll';

const Project = ({
	index,
	name,
	description,
	githubUrl,
	siteUrl,
	techItems = [],
	imageUrl,
}) => {
	return (
		<ScrollAnimation animateIn='zoomIn'>
			{index % 2 === 0 ? (
				<div className='proj-2'>
					<div className='proj-2-leftside'>
						<h4 className='feat-header'>Featured Project</h4>
						<h5 className='Proj-name'>{name}</h5>
						<div className='proj-description'>
							<p className='proj-description-text'>{description}</p>
						</div>
						<a href={githubUrl} target='_blank' rel='noopener noreferrer'>
							<GithubSVG className='github'></GithubSVG>
						</a>
						<a href={siteUrl} target='_blank' rel='noopener noreferrer'>
							<GoTo className='go-to'></GoTo>
						</a>
						<ul className='tech-list2-2'>
							{techItems.map((each) => (
								<li key={`${each}-${Math.random()}`} className='tech-items'>
									{each}
								</li>
							))}
						</ul>
					</div>
					<div className='proj-2-pic-wrapper'>
						<a href={siteUrl} target='_blank' rel='noopener noreferrer'>
							<img className='proj-2-pic' src={imageUrl} alt={name} />
						</a>
					</div>
				</div>
			) : (
				<div className='proj-1'>
					<div className='proj-1-rightside'>
						<div className='proj-1-links'>
							<h4 className='feat-header'>Featured Project</h4>
						</div>
						<div className='proj-1-links'>
							<h5 className='Proj-name'>{name}</h5>
						</div>
						<div className='proj-description'>
							<p className='proj-description-text'>{description}</p>
						</div>
						<div className='proj-1-links'>
							<a href={githubUrl} target='_blank' rel='noopener noreferrer'>
								<GithubSVG className='github'></GithubSVG>
							</a>
							<a href={siteUrl} target='_blank' rel='noopener noreferrer'>
								<GoTo className='go-to'></GoTo>
							</a>
						</div>
						<ul className='tech-list2'>
							{techItems.map((each) => (
								<li key={`${each}-${Math.random()}`} className='tech-items'>
									{each}
								</li>
							))}
						</ul>
					</div>
					<div className='proj-1-pic-wrapper'>
						<a href={siteUrl} target='_blank' rel='noopener noreferrer'>
							<img className='proj-1-pic' src={imageUrl} alt={name} />
						</a>
					</div>
				</div>
			)}
		</ScrollAnimation>
	);
};

export default Project;
