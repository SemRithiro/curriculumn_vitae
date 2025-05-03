import { personalData } from '@/types';

const personal_curriculumn_vitae: personalData = {
	first_name: 'Sem',
	last_name: 'Rithiro',
	address: 'Prey Sa, Dangkor, Phnom Penh, Cambodia.',
	telephone: '086 577 787',
	email: 'rithiro@gmail.com',
	about_me:
		'Full-stack developer with 5+ years of experience in ReactJS, Node.js, Spring Boot, and Python. Skilled in building scalable APIs, real-time systems, and secure architectures. Focused on cloud-native solutions, automation, and driving innovation through clean, efficient code and team leadership.',
	public_link: [
		{ name: 'GitHub', url: 'https://github.com/SemRithiro' },
		{ name: 'Linkin', url: 'https://www.linkedin.com/in/rithirosem' },
		{ name: 'Telegram', url: 'http://t.me/rithiro' },
	],
	work_experience: [
		{
			company: 'UDAYA Technology',
			position: 'Senior R&D and Product Management',
			duration: 'December 2024 - Present',
			responsibility: [
				'API Development using Spring Boot',
				'Designing real-time project architectures',
				'Developing automated scripts to update real-time data',
				'Mentoring development teams on essential skills',
				'Planning and coordinating MVP product development',
			],
		},
		{
			company: 'UDAYA Technology',
			position: 'IOT Developer',
			duration: 'April 2019 - December 2024',
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
	technical_skills: [
		{ name: 'Java', value: 85 },
		{ name: 'Javascript', value: 85 },
		{ name: 'Typescript', value: 75 },
		{ name: 'Python', value: 90 },
		{ name: 'GitHub', value: 60 },
		{ name: 'Docker', value: 70 },
		{ name: 'SQL', value: 75 },
		{ name: 'Shell Script', value: 60 },
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
