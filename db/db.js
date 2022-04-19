export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I'm Satyabrata Pujari. I’m currently a penultimate year engineering student @ IIT (BHU) Varanasi specialized in JavaScript Applications.",
				"I'm a developer, geek and curious human besides being an OpenSource enthusiast. I have experience of delivering solutions for interesting problems from startup and industry space.",
				"I love to read, listen to music, and travel.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: satyabratapujari2001@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "JavaScript, C++",
			color: "1",
			percentage: "70",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Reactjs",
			color: "6",
			percentage: "50",
		},
		{
			title: "Backend",
			skillName: "Nodejs, MongoDB",
			color: "2",
			percentage: "40",
		},
		{
			title: "Clouds",
			skillName: "ExpressJS",
			color: "3",
			percentage: "60",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, CSS",
			color: "4",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "Git, GitHub",
			color: "7",
			percentage: "70",
		},
		{
			title: "Tools",
			skillName: "Postman, Chrome DevTools",
			color: "3",
			percentage: "80",
		},
		{
			title: "Editor",
			skillName: "VS Code",
			color: "6",
			percentage: "70",
		},
	],
	projects: {
		web: [
			{
				projectName: "Programming Diaries",
				image: "images/programmingdiaries.png",
				summary:
					"Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
				preview: "https://github.com/satya584",
				techStack: [
					"Django",
					"SQLite",
					"Bootstrap",
					"JavaScript",
					"Heroku",
				],
			},
			{
				projectName: "Find Your Bank",
				image: "images/findyourbank.png",
				summary:
					"Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
				preview: "https://github.com/satya584",
				techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
			},
			{
				projectName: "Web Portfolio",
				image: "images/portfolio.png",
				summary:
					"Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
				preview: "https://github.com/satya584",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
			{
				projectName: "Resume Builder",
				image: "images/resume-builder.png",
				summary:
					"Browser based editor to build and download Resumes in a customizable templates.",
				preview: "https://github.com/satya584",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
		],
		software: [
			{
				projectName: "Pizza Ordering ChatBot",
				image: "images/pizzaorderchatbot.png",
				summary:
					"ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
				preview:
					"https://github.com/satya584",
				techStack: ["Dailogflow", "Firebase"],
			},
			{
				projectName: "WhatsApp-Bot",
				image: "images/whatsappbot.jpg",
				summary:
					"Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
				preview: "https://github.com/satya584",
				techStack: ["Selenium", "Chrome Webdriver", "Python"],
			},
			{
				projectName: "Bill Generator",
				image: "images/billgenerator.png",
				summary:
					"GUI to transfer data to excel sheets and generate bills on the local shops.",
				preview: "https://github.com/satya584",
				techStack: ["Tkinter", "Openxlpy", "Python"],
			},
		],
		/* android: [
			{
				projectName: "",
				image: "",
				summary:
					"The Application display details of Department courses, reference books, research, publication and faculty profile.",
				preview: "",
				techStack: ["JAVA", "XML", "Android"],
			},
			{
				projectName: "",
				image: "images/",
				summary:
					"The Application display the webpages of website careerhigh.in in android devices.",
				preview: "",
				techStack: ["JAVA", "XML", "Android"],
			},
		],
		freelance: [
			{
				projectName: "",
				image: "images/",
				summary:
					"Developed a company website to showcase the purpose, services and products provided by the company to audience.",
				preview: "",
				techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
			},
			{
				projectName: "",
				image: "images/",
				summary:
					"Android Application to display website in android devices.",
				preview:
					"",
				techStack: ["Android", "JAVA", "Play Store"],
			},
		],*/
	},
	experience: [
		{
			title: "upSkill JS",
			duration: "May 2021 - July 2021",
			subtitle: "SDE Intern",
			details: [
				"Contributed toward the development of REST API for the content management system of upskilljs.com.",
				"Key features implemented were authentication, middlewares, & optimizing the server response time",
			],
			tags: [
				"JavaScript",
				"Express.js",
				"Node.js",
				"MongoDB",
				"GitHub",
			],
			icon: "qrcode",
		},
	],
	education: [
		{
			title: "Bachelors in Mechanical Engineering",
			duration: "",
			subtitle: "Indian Institute of Technology, (BHU), Varanasi",
			details: [
				"Current CPI 8.04.",
				"Active Competitive Programmer and Software Developer.",
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Computer Networks",
				"Compiler Designing",
				"Cloud Computing",
			],
			icon: "graduation-cap",
		},
		{
			title: "Class 11-12th in Science and Mathematics",
			duration: "",
			subtitle: "SRI CHAITANYA VIDYA NIKETAN ,VISAKHAPATNAM",
			details: [
				"Qualified JEE Advanced & Main.",
				"Secured 92 percentage in Class 12th Boards Examinations.",
			],
			tags: ["Physics", "Chemistry", "Mathematics"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "Stackoverflow",
					link: "https://stackoverflow.com",
				},
				{
					text: "GitHub",
					link: "https://github.com",
				},
				{
					text: "LeetCode",
					link: "https://leetcode.com",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				{
					text: "Clone this page",
					link: "https://github.com/satya584/satya584.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/satyabrata-pujari-875a44192/",
				},
				{
					text: "Instagram",
					link: "https://www.instagram.com/s_a_t_y_a_7/",
				},
				{
					text: "Buy me a coffee",
					link: "https://www.buymeacoffee.com",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; by Satyabrata Pujari.",
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
