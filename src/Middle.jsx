import 'react-slidedown/lib/slidedown.css';
import './stylesheet/middle.scss';
import './stylesheet/animate.css';

import Project from './components/Project';
import React from 'react';
import Resume from './static/Danny_Yoo_SWE_Resume.pdf';
import ScrollAnimation from 'react-animate-on-scroll';
import empireImg from './static/empire.jpg';
import { workData } from './db/workData';

const Middle = () => {
	return (
		<div className='mid-container'>
			{/* ---------- TOP ---------- */}
			<div className='mid-top-container'>
				<p>Hey world, my name is</p>
				<ScrollAnimation animateIn='fadeIn' delay={200}>
					<h1 className='name-text'>Danny Yoo.</h1>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeIn' delay={400}>
					<p className='third-text'>
						Co-founder and CTO of{' '}
						<a
							href='https://faithly.co'
							style={{ color: '#AC89C8', textDecoration: 'none' }}
							target='_blank'
							rel='noopener noreferrer'
						>
							Faithly.
						</a>
					</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeIn' delay={500}>
					<a href={Resume} target='_blank' rel='noopener noreferrer'>
						<button className='Get-In-Touch'>My Resume</button>
					</a>
				</ScrollAnimation>
			</div>
			{/* ----------ABOUT ME ---------- */}
			<div className='About-Me-Container' id='about-me'>
				<ScrollAnimation animateIn='fadeIn'>
					<div className='About-me-header'>About Me</div>
					<div className='prof-container'>
						<div className='bio-text'>
							<p>
								Hey, I'm Danny. Born and raise in New York City, but currently
								residing in Atlanta. I used to be a pastor for 10 years before
								pivoting to tech. I'm a hacker at heart, trying to solve
								problems for churches and help the people they minister to. I'm
								also an avid pizza lover, and a loyal sports fanatic to my lowly
								Jets, Mets, Rangers, and Knicks.
							</p>
						</div>
						<div className='profile-pic'>
							<img
								className='profile-img'
								src={empireImg}
								alt='empire-state-building'
							></img>
						</div>
					</div>
				</ScrollAnimation>
			</div>
			{/* ---------- MY PROJECTS ---------- */}
			<div className='Experience-Container' id='my-work'>
				<ScrollAnimation animateIn='fadeIn'>
					<div className='experience-header'>My Work</div>
				</ScrollAnimation>
				{workData.map((each, i) => (
					<div style={{ margin: '8rem 0' }}>
						<Project
							key={each.name + i}
							index={i}
							name={each.name}
							description={each.description}
							githubUrl={each.githubUrl}
							siteUrl={each.siteUrl}
							techItems={each.techItems}
							imageUrl={each.imageUrl}
						/>
					</div>
				))}
			</div>
			<div className='final-container' id='contact-me'>
				<a
					href='mailto:danny@faithly.co'
					className='contact-email'
					target='_blank'
					rel='noopener noreferrer'
				>
					Contact Me
				</a>
			</div>
		</div>
	);
};

export default Middle;
