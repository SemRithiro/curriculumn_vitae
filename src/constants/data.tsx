import { personalData } from '@/types';

const personal_curriculumn_vitae: personalData = {
	first_name: 'Sem',
	last_name: 'Rithiro',
	address: 'Prey Sa, Dangkor, Phnom Penh, Cambodia.',
	telephone: '086 577 787',
	email: 'rithiro@gmail.com',
	about_me:
		'I’m a full-stack developer with over five years of experience working with Spring Boot, ReactJS, Node.js, and Python. I focus on building robust, secure, and scalable APIs, as well as real-time systems. I have a growing understanding of Spring Cloud, Kubernetes, Kafka, and microservices architecture, and I’m eager to apply these technologies more deeply in real-world projects. I’m passionate about writing clean, efficient code, driving automation, and contributing to collaborative, high-performing teams.',
	public_link: [
		{ name: 'GitHub', url: 'https://github.com/SemRithiro' },
		{ name: 'Linkin', url: 'https://www.linkedin.com/in/rithirosem' },
		{ name: 'Telegram', url: 'http://t.me/rithiro' },
	],
	work_experience: [
		{
			company: 'UDAYA Technology',
			position: 'Senior R&D and Product Management',
			duration: 'December 2023 - Present',
			responsibility: [
				'Building modern API using Spring Boot following best practices',
				'Secure API using Keycloak, JWT, and security headers',
				'Designing real-time project architectures',
				'Developing automated scripts to update real-time data with Python',
				'Mentoring development team on essential skills',
				'Planning and coordinating MVP product development',
			],
		},
		{
			company: 'UDAYA Technology',
			position: 'IOT Developer',
			duration: 'April 2019 - December 2023',
			responsibility: [
				'Frontend development using ReactJS',
				'Embedded programming with Arduino and ESP',
				'Integrating various communication protocols',
				'Automating tasks with Python scripting',
				'Basic PCB design and layout',
			],
		},
	],
	education: [
		{ school: 'Royal University of Phnom Penh', degree: 'Bachelor degree of Computer Science', duration: '2014-2019' },
		{ school: 'Chea Sim Samaki High School', degree: 'High school deploma', duration: '2011-2014' },
	],
	training: [
		{ school: 'UDAYA Technology', degree: 'Project Management (WBS Project)', duration: 'January-2025' },
		{ school: 'UDAYA Technology', degree: 'Microservice Level 1&2', duration: 'June-2024' },
		{ school: 'UDAYA Technology', degree: 'Database Administrator', duration: 'January-2024' },
	],
	technical_skills: [
		{ name: 'Java', value: 85 },
		{ name: 'Javascript', value: 85 },
		{ name: 'Typescript', value: 70 },
		{ name: 'Python', value: 70 },
		{ name: 'GitHub', value: 60 },
		{ name: 'Docker', value: 50 },
		{ name: 'SQL', value: 70 },
		{ name: 'Shell Script', value: 50 },
	],
	soft_skils: [
		{ name: 'Problem solving', value: 90 },
		{ name: 'Critical thinking', value: 70 },
		{ name: 'Adaptability', value: 80 },
		{ name: 'Communication', value: 50 },
	],
	languages: [
		{ name: 'Khmer', value: 100 },
		{ name: 'English', value: 60 },
	],
	references: [],
	hobbies: ['Exploring emerging technologies', 'Continuous learning and skill development', 'Listening to music', 'Traveling and experiencing new cultures'],
};

export { personal_curriculumn_vitae };
