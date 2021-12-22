import React from 'react';
import 'react-slidedown/lib/slidedown.css';
import './stylesheet/middle.scss';
import empireImg from './static/empire.jpg';
import expressImg from './static/express.png';
import herokuImg from './static/heroku.png';
import html5Img from './static/html5.png';
import mongodbImg from './static/mongodb.png';
import nodejsImg from './static/nodejs.png';
import postresqlImg from './static/postgresql.png';
import tsImg from './static/ts.png';
import graphqlImg from './static/graphql.png';
import reactjsImg from './static/reactjs.png';
import reduxImg from './static/redux.png';
import pythonImg from './static/python.png';
import djangoImg from './static/django.png';
import rubyonrailsImg from './static/rubyonrails.png';
import sassImg from './static/sass.png';
import './stylesheet/animate.css';
import Resume from './static/Danny_Yoo_SWE_Resume.pdf';
import Project from './components/Project';
import { projectsData } from './db/projectsData';
import Upcoming from './components/Upcoming';
import { upcomingsData } from './db/upcomingsData';
import ScrollAnimation from 'react-animate-on-scroll';

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
	html5Img,
	sassImg,
	postresqlImg,
	herokuImg,
	mongodbImg,
];
const TECHNOLOGIES = [
	'JavaScript',
	'Node.js',
	'MongoDB',
	'TypeScript',
	'Express.js',
	'Postgresql',
	'Python',
	'Django',
	'GraphQL',
	'Ruby On Rails',
	'React + Redux',
	'Heroku',
];

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
						I'm a software engineer based in Queens, New York specializing in
						building and designing full stack applications and websites that
						solves real life problems for real life people. Check out my
						projects below!
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
								Hello! I'm Danny, a software engineer based in Queens, NY. I'm
								an avid pizza lover, and a loyal sports fanatic to my lowly
								Jets, Mets, Rangers, and Knicks. I'm love working on teams
								passionate about their vision and mission, who cares about
								people over profit, and who's driven about products for people.
								Some of projects are solutions to problems I have personally
								dealt with throughout my professional career. You can check out
								my progress below!
								<br></br>
								<br></br>
								Here are a few technologies I've been working with recently:
							</p>
							<ul className='tech-list-exp'>
								{TECHNOLOGIES.map((each, i) => {
									return (
										<li key={`${each}-${i}`} className='tech-item'>
											{each}
										</li>
									);
								})}
							</ul>
						</div>
						<div className='profile-pic'>
							<img
								className='profile-img'
								src={empireImg}
								alt='empire-state-building'
							></img>
						</div>
					</div>
					<div className='tech-icons'>
						{TECH_ICONS.map((each, i) => {
							const divId = each.includes('mongo') ? 'mongo' : 'null';
							return (
								<img
									id={divId}
									key={`${each}-${i}`}
									className='tech-img'
									src={each}
									alt='aboutme-tech-icon'
								/>
							);
						})}
					</div>
				</ScrollAnimation>
			</div>
			{/* ---------- MY PROJECTS ---------- */}
			<div className='Experience-Container' id='my-projects'>
				<ScrollAnimation animateIn='fadeIn'>
					<div className='experience-header'>My Projects</div>
				</ScrollAnimation>
				<div className='innter-container'>
					{projectsData.map((each, i) => (
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
					))}
					<section className='noteworthy-container'>
						<ScrollAnimation animateIn='fadeIn'>
							<h4 className='header-4'>Upcoming Projects</h4>
						</ScrollAnimation>
						<div className='noteworthy-projs'>
							{upcomingsData.map((each, i) => (
								<Upcoming
									key={each.name + i}
									name={each.name}
									description={each.description}
									githubUrl={each.githubUrl}
									siteUrl={each.siteUrl}
									techItems={each.techItems}
									imageUrl={each.imageUrl}
								/>
							))}
						</div>
					</section>
				</div>
			</div>
			<div className='final-container' id='contact-me'>
				<a
					href='mailto:dansteryoo@gmail.com'
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
