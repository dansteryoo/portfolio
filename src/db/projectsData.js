
const wereadtruthImage = require('../static/we_read_truth.png');
const chairsbnbImg = require('../static/chairsbnb.png');
const schoolforceImage = require('../static/schoolforce.png');;

export const projectsData = [
	{
		name: 'We Read Truth',
		description:
			'A website where users can journal their devotionals using the She Reads Truth and He Reads Truth content.',
		githubUrl: 'https://github.com/dansteryoo/we_read_truth',
		techItems: ['Ruby On Rails', 'React, Redux', 'Heroku', 'Postgresql'],
		imageUrl: wereadtruthImage,
		siteUrl: 'https://www.wereadtruth.app/#/',
	},
	{
		name: 'ChairsBnB',
		description:
			'A website for solo travelers who can rent single chairs around the world inspired by Airbnb.',
		githubUrl: 'https://github.com/dansteryoo/',
		techItems: ['Ruby On Rails', 'React + Redux', 'AWS(S3)', 'Postgresql'],
		imageUrl: chairsbnbImg,
		siteUrl: 'http://chairsbnb.herokuapp.com/#/',
	},
	{
		name: 'SchoolForce',
		description:
			'A “CRM” web application that allows schools to send reminders to parents via SMS messaging.',
		githubUrl: 'https://github.com/dansteryoo/SchoolForce-1',
		techItems: [
			'MongoDB',
			'Express.js',
			'React + Redux',
			'Node.js',
			'Twilio API',
		],
		imageUrl: schoolforceImage,
		siteUrl: 'https://schoolforceapp.herokuapp.com/#/',
	},
];
