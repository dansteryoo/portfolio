import React from 'react';
import { ReactComponent as GithubSVG } from '../static/Github.svg';
import { ReactComponent as GoTo } from '../static/goTo.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import { ReactComponent as Folder } from '../static/folder.svg';

const Upcoming = ({
	name,
	description,
	githubUrl,
	siteUrl,
	techItems = [],
}) => {
	return (
		<ScrollAnimation animateIn='fadeIn' delay={500}>
			<div className='note-1'>
				<div className='inner-cont'>
					<header>
						<div className='top-logo-cont'>
							<Folder className='folder-svg'></Folder>
							<a href={githubUrl} target='_blank' rel='noopener noreferrer'>
								<GithubSVG className='github-upcoming'></GithubSVG>
							</a>
							<a href={siteUrl} target='_blank' rel='noopener noreferrer'>
								<GoTo className='go-to-upcoming'></GoTo>
							</a>
						</div>
						<h5 style={{ margin: '1rem 0' }}>{name}</h5>
						<div className='descript-note'>{description}</div>
					</header>
					<footer>
						<ul className='tech-list'>
							{techItems.map((each) => (
								<li key={`${each}-${Math.random()}`}>{each}</li>
							))}
						</ul>
					</footer>
				</div>
			</div>
		</ScrollAnimation>
	);
};

export default Upcoming;
