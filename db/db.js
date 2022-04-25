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
				projectName: "Web Portfolio",
				image: "images/satya-portfolio.png",
				summary:
					"Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
				preview: "https://satya584.github.io",
				techStack: ["HTML", "Bootstrap", "JavaScript"],
			},
			{
				projectName: "Classic Tetris game",
				image: "images/Tetris_game.jpg",
				summary:
					"Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
				preview: "https://satya584.github.io/JS-Games/tetris/",
				techStack: [
					"Vanilla-JS",
					"HTML5",
					"css3",
				],
			},
		],
		software: [
			{
				projectName: "E-mail verification through OTP",
				image: "images/email-verification-OTP.png",
				summary:
					"Web Api for login ,register, update profile and send otp in mail for email verification and successful registration.",
				preview:
					"https://github.com/satya584/EmailVerificationThroughOTP",
				techStack: ["Express-js", "@mailgun-js", "mongodb"],
			},
			{
				projectName: "Bike rental backend",
				image: "images/Bike-rental.jpg",
				summary:
					"Backend/API developed for Bike rental application with Express.js & MongoDB.",
				preview: "https://github.com/satya584/BikeRentalApplication",
				techStack: ["Express.js", "mongodb", "API"],
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
