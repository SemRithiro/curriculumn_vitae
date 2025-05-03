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
			responsibility: ['API Development with Spring Boot', 'Design real-time project architecture', 'Mentoring essential skills to development teams', 'Planning and coordinating MVP product'],
		},
		{
			company: 'UDAYA Technology',
			position: 'IOT Developer',
			duration: 'April 2019 - December 2024',
			responsibility: ['Frontend development with ReactJS', 'Programming with Arduino and ESP', 'Automate scripting with Python', 'Basic PCB design'],
		},
	],
	education: [
		{ school: 'Royal University of Phnom Penh', degree: 'Bachelor degree of Computer Science', duration: '2014-2019' },
		{ school: 'Chea Sim Samaki High School', degree: 'High school deploma', duration: '2011-2014' },
	],
	skills: [
		{ name: 'Java', value: 85 },
		{ name: 'Javascript', value: 85 },
		{ name: 'Typescript', value: 75 },
		{ name: 'Python', value: 90 },
		{ name: 'GitHub', value: 60 },
		{ name: 'Docker', value: 70 },
		{ name: 'SQL', value: 75 },
		{ name: 'BaseScript', value: 60 },
	],
	languages: [
		{ name: 'Khmer', value: 100 },
		{ name: 'English', value: 70 },
	],
	references: [],
	hobbies: ['Researching on new technologies', 'Listen to music', 'Travel'],
};

export { personal_curriculumn_vitae };
