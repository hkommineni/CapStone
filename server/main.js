import { Meteor } from 'meteor/meteor';

import { Agents } from '../collections/agents.js';
import { Videos } from '../collections/videos.js';
import { Companies } from '../collections/companies.js';

import { publishAll } from './publish.js';
import { allowAll } from './allow.js';
import { agentsMethods } from './agentsMethods.js'
import { videosMethods } from './videosMethods.js';
import { companiesMethods } from './companiesMethods.js';


Meteor.startup(() => {
	// Set up publish model
	allowAll();
	publishAll();

	// Bring in agents methods
	agentsMethods();
	videosMethods();
	companiesMethods();

	// Clear the databases (for testing)
	Videos.remove({});
	Agents.remove({});
	Companies.remove({});

	// Initialize the Companies database (for testing)
	if(Companies.find({}).fetch().length <= 0) {
		//Company 1
		Companies.insert({
			companyName: 'Bellevue Medical Center ',
			shortName: 'BMC',
			className: 'csg'
		});
		//Company 2
		Companies.insert({
			companyName: 'University Of Nebraska Medical Center',
			shortName: 'UNMC',
			className: 'penske'
		});

		//Company 3
		Companies.insert({
			companyName: 'CHI Health Bergan Mercy',
			shortName: 'CHIh',
			className: 'comcast'
		});

		//Company 4
		Companies.insert({
			companyName: 'Methodist',
			shortName: 'Methodist',
			className: 'dish'
		});

		//Company 5
		Companies.insert({
			companyName: 'Mayo Clinic',
			shortName: 'Mayo',
			className: 'cox'
		});

		//Company 6
		Companies.insert({
			companyName: 'Cleveland Clinic',
			shortName: 'Cleveland',
			className: 'charter'
		});

		//Company 7
		Companies.insert({
			companyName: 'Johns Hopkins Hospital',
			shortName: 'Johns',
			className: 'verizon'
		});

		//Company 8
		Companies.insert({
			companyName: 'Mount Sinai Hospital',
			shortName: 'MountSH',
			className: 'virgin'
		});
	}

	var csgiCompanyId = Companies.find({shortName:'BMC'}).fetch()[0]._id;
	var coxCompanyId = Companies.find({shortName:'Mayo'}).fetch()[0]._id;
	var virginCompanyId = Companies.find({shortName:'MountSH'}).fetch()[0]._id;
	var verizonCompanyId = Companies.find({shortName:'Johns'}).fetch()[0]._id;
	var charterCompanyId = Companies.find({shortName:'Cleveland'}).fetch()[0]._id;
	var dishCompanyId = Companies.find({shortName:'Methodist'}).fetch()[0]._id;
	var comcastCompanyId = Companies.find({shortName:'CHIh'}).fetch()[0]._id;
	var penskeCompanyId = Companies.find({shortName:'UNMC'}).fetch()[0]._id;

	// Initialize the Agents database (for testing)
	if(Agents.find({}).fetch().length <= 0) {
		//Agent 1
		Agents.insert({
			companyId: csgiCompanyId,
			firstName: 'Sheila',
			lastName: 'Bleyhl',
			email: 'sheila.bleyhl@bmc.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.support.com/blehylvideo',
			imageUrl: '/res/agent1.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 2
		Agents.insert({
			companyId: csgiCompanyId,
			firstName: 'Brandon',
			lastName: 'Gene',
			email: 'brandon.gene@bmc.com',
			phoneNumber: '(402) 555-3947',
			videoLink: 'www.support.com/genevideo',
			imageUrl: '/res/agent2.jpeg',
			available: false,
			waitTime: 11
		});

		//Agent 3
		Agents.insert({
			companyId: csgiCompanyId,
			firstName: 'Lauren',
			lastName: 'Darrin',
			email: 'lauren.darrin@bmc.com',
			phoneNumber: '(402) 555-3129',
			videoLink: 'www.support.com/darrinvideo',
			imageUrl: '/res/agent3.jpeg',
			available: false,
			waitTime: 4
		});

		//Agent 4
		Agents.insert({
			companyId: csgiCompanyId,
			firstName: 'Ronald',
			lastName: 'Reagan',
			email: 'ronald.reagan@bmc.com',
			phoneNumber: '(402) 555-9394',
			videoLink: 'www.support.com/reaganvideo',
			imageUrl: '/res/agent4.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 5
		Agents.insert({
			companyId: csgiCompanyId,
			firstName: 'Jared',
			lastName: 'Freud',
			email: 'jerrod.sigmund@bmc.com',
			phoneNumber: '(402) 555-2010',
			videoLink: 'www.support.com/sigmundvideo',
			imageUrl: '/res/Person1.jpeg',
			available: false,
			waitTime: 2
		});

		//Agent 6
		Agents.insert({
			companyId: csgiCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@bmc.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/Person2.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: coxCompanyId,
			firstName: 'Sheila',
			lastName: 'Bleyhl',
			email: 'sheila.bleyhl@mayo.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.support.com/blehylvideo',
			imageUrl: '/res/Person3.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 2
		Agents.insert({
			companyId: coxCompanyId,
			firstName: 'Brandon',
			lastName: 'Gene',
			email: 'brandon.gene@mayo.com',
			phoneNumber: '(402) 555-3947',
			videoLink: 'www.support.com/genevideo',
			imageUrl: '/res/Person4.jpeg',
			available: false,
			waitTime: 11
		});

		//Agent 3
		Agents.insert({
			companyId: coxCompanyId,
			firstName: 'Lauren',
			lastName: 'Darrin',
			email: 'lauren.darrin@mayo.com',
			phoneNumber: '(402) 555-3129',
			videoLink: 'www.support.com/darrinvideo',
			imageUrl: '/res/Person5.jpeg',
			available: false,
			waitTime: 4
		});

		//Agent 4
		Agents.insert({
			companyId: coxCompanyId,
			firstName: 'Ronald',
			lastName: 'Reagan',
			email: 'ronald.reagan@mayo.com',
			phoneNumber: '(402) 555-9394',
			videoLink: 'www.support.com/reaganvideo',
			imageUrl: '/res/Person6.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 5
		Agents.insert({
			companyId: coxCompanyId,
			firstName: 'Jared',
			lastName: 'Freud',
			email: 'jerrod.sigmund@mayo.com',
			phoneNumber: '(402) 555-2010',
			videoLink: 'www.support.com/sigmundvideo',
			imageUrl: '/res/Person7.jpg',
			available: false,
			waitTime: 2
		});

		//Agent 6
		Agents.insert({
			companyId: coxCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@mayo.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/Person8.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: virginCompanyId,
			firstName: 'Sheila',
			lastName: 'Bleyhl',
			email: 'sheila.bleyhl@msh.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.support.com/blehylvideo',
			imageUrl: '/res/Person9.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 2
		Agents.insert({
			companyId: virginCompanyId,
			firstName: 'Brandon',
			lastName: 'Gene',
			email: 'brandon.gene@msh.com',
			phoneNumber: '(402) 555-3947',
			videoLink: 'www.support.com/genevideo',
			imageUrl: '/res/Person10.jpeg',
			available: false,
			waitTime: 11
		});

		//Agent 3
		Agents.insert({
			companyId: virginCompanyId,
			firstName: 'Lauren',
			lastName: 'Darrin',
			email: 'lauren.darrin@msh.com',
			phoneNumber: '(402) 555-3129',
			videoLink: 'www.support.com/darrinvideo',
			imageUrl: '/res/agent3.jpeg',
			available: false,
			waitTime: 4
		});

		//Agent 4
		Agents.insert({
			companyId: virginCompanyId,
			firstName: 'Ronald',
			lastName: 'Reagan',
			email: 'ronald.reagan@msh.com',
			phoneNumber: '(402) 555-9394',
			videoLink: 'www.support.com/reaganvideo',
			imageUrl: '/res/agent4.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 5
		Agents.insert({
			companyId: virginCompanyId,
			firstName: 'Jared',
			lastName: 'Freud',
			email: 'jerrod.sigmund@msh.com',
			phoneNumber: '(402) 555-2010',
			videoLink: 'www.support.com/sigmundvideo',
			imageUrl: '/res/agent5.jpeg',
			available: false,
			waitTime: 2
		});

		//Agent 6
		Agents.insert({
			companyId: virginCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@msh.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: verizonCompanyId,
			firstName: 'Sheila',
			lastName: 'Bleyhl',
			email: 'sheila.bleyhl@johns.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.support.com/blehylvideo',
			imageUrl: '/res/agent1.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 2
		Agents.insert({
			companyId: verizonCompanyId,
			firstName: 'Brandon',
			lastName: 'Gene',
			email: 'brandon.gene@johns.com',
			phoneNumber: '(402) 555-3947',
			videoLink: 'www.support.com/genevideo',
			imageUrl: '/res/agent2.jpeg',
			available: false,
			waitTime: 11
		});

		//Agent 3
		Agents.insert({
			companyId: verizonCompanyId,
			firstName: 'Lauren',
			lastName: 'Darrin',
			email: 'lauren.darrin@johns.com',
			phoneNumber: '(402) 555-3129',
			videoLink: 'www.support.com/darrinvideo',
			imageUrl: '/res/agent3.jpeg',
			available: false,
			waitTime: 4
		});

		//Agent 4
		Agents.insert({
			companyId: verizonCompanyId,
			firstName: 'Ronald',
			lastName: 'Reagan',
			email: 'ronald.reagan@johns.com',
			phoneNumber: '(402) 555-9394',
			videoLink: 'www.support.com/reaganvideo',
			imageUrl: '/res/agent4.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 5
		Agents.insert({
			companyId: verizonCompanyId,
			firstName: 'Jared',
			lastName: 'Freud',
			email: 'jerrod.sigmund@johns.com',
			phoneNumber: '(402) 555-2010',
			videoLink: 'www.support.com/sigmundvideo',
			imageUrl: '/res/agent5.jpeg',
			available: false,
			waitTime: 2
		});

		//Agent 6
		Agents.insert({
			companyId: verizonCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@johns.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: charterCompanyId,
			firstName: 'Sheila',
			lastName: 'Bleyhl',
			email: 'sheila.bleyhl@cleveland.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.support.com/blehylvideo',
			imageUrl: '/res/agent1.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 2
		Agents.insert({
			companyId: charterCompanyId,
			firstName: 'Brandon',
			lastName: 'Gene',
			email: 'brandon.gene@cleveland.com',
			phoneNumber: '(402) 555-3947',
			videoLink: 'www.support.com/genevideo',
			imageUrl: '/res/agent2.jpeg',
			available: false,
			waitTime: 11
		});

		//Agent 3
		Agents.insert({
			companyId: charterCompanyId,
			firstName: 'Lauren',
			lastName: 'Darrin',
			email: 'lauren.darrin@cleveland.com',
			phoneNumber: '(402) 555-3129',
			videoLink: 'www.support.com/darrinvideo',
			imageUrl: '/res/agent3.jpeg',
			available: false,
			waitTime: 4
		});

		//Agent 4
		Agents.insert({
			companyId: charterCompanyId,
			firstName: 'Ronald',
			lastName: 'Reagan',
			email: 'ronald.reagan@cleveland.com',
			phoneNumber: '(402) 555-9394',
			videoLink: 'www.support.com/reaganvideo',
			imageUrl: '/res/agent4.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 5
		Agents.insert({
			companyId: charterCompanyId,
			firstName: 'Jared',
			lastName: 'Freud',
			email: 'jerrod.sigmund@cleveland.com',
			phoneNumber: '(402) 555-2010',
			videoLink: 'www.support.com/sigmundvideo',
			imageUrl: '/res/agent5.jpeg',
			available: false,
			waitTime: 2
		});

		//Agent 6
		Agents.insert({
			companyId: charterCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@cleveland.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: dishCompanyId,
			firstName: 'Sheila',
			lastName: 'Bleyhl',
			email: 'sheila.bleyhl@methodist.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.support.com/blehylvideo',
			imageUrl: '/res/agent1.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 2
		Agents.insert({
			companyId: dishCompanyId,
			firstName: 'Brandon',
			lastName: 'Gene',
			email: 'brandon.gene@methodist.com',
			phoneNumber: '(402) 555-3947',
			videoLink: 'www.support.com/genevideo',
			imageUrl: '/res/agent2.jpeg',
			available: false,
			waitTime: 11
		});

		//Agent 3
		Agents.insert({
			companyId: dishCompanyId,
			firstName: 'Lauren',
			lastName: 'Darrin',
			email: 'lauren.darrin@methodist.com',
			phoneNumber: '(402) 555-3129',
			videoLink: 'www.support.com/darrinvideo',
			imageUrl: '/res/agent3.jpeg',
			available: false,
			waitTime: 4
		});

		//Agent 4
		Agents.insert({
			companyId: dishCompanyId,
			firstName: 'Ronald',
			lastName: 'Reagan',
			email: 'ronald.reagan@methodist.com',
			phoneNumber: '(402) 555-9394',
			videoLink: 'www.support.com/reaganvideo',
			imageUrl: '/res/agent4.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 5
		Agents.insert({
			companyId: dishCompanyId,
			firstName: 'Jared',
			lastName: 'Freud',
			email: 'jerrod.sigmund@methodist.com',
			phoneNumber: '(402) 555-2010',
			videoLink: 'www.support.com/sigmundvideo',
			imageUrl: '/res/agent5.jpeg',
			available: false,
			waitTime: 2
		});

		//Agent 6
		Agents.insert({
			companyId: dishCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@methodist.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: comcastCompanyId,
			firstName: 'Sheila',
			lastName: 'Bleyhl',
			email: 'sheila.bleyhl@chbm.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.support.com/blehylvideo',
			imageUrl: '/res/agent1.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 2
		Agents.insert({
			companyId: comcastCompanyId,
			firstName: 'Brandon',
			lastName: 'Gene',
			email: 'brandon.gene@chbm.com',
			phoneNumber: '(402) 555-3947',
			videoLink: 'www.support.com/genevideo',
			imageUrl: '/res/agent2.jpeg',
			available: false,
			waitTime: 11
		});

		//Agent 3
		Agents.insert({
			companyId: comcastCompanyId,
			firstName: 'Lauren',
			lastName: 'Darrin',
			email: 'lauren.darrin@chbm.com',
			phoneNumber: '(402) 555-3129',
			videoLink: 'www.support.com/darrinvideo',
			imageUrl: '/res/agent3.jpeg',
			available: false,
			waitTime: 4
		});

		//Agent 4
		Agents.insert({
			companyId: comcastCompanyId,
			firstName: 'Ronald',
			lastName: 'Reagan',
			email: 'ronald.reagan@chbm.com',
			phoneNumber: '(402) 555-9394',
			videoLink: 'www.support.com/reaganvideo',
			imageUrl: '/res/agent4.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 5
		Agents.insert({
			companyId: comcastCompanyId,
			firstName: 'Jared',
			lastName: 'Freud',
			email: 'jerrod.sigmund@chbm.com',
			phoneNumber: '(402) 555-2010',
			videoLink: 'www.support.com/sigmundvideo',
			imageUrl: '/res/agent5.jpeg',
			available: false,
			waitTime: 2
		});

		//Agent 6
		Agents.insert({
			companyId: comcastCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@chbm.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/agent6.jpeg',
			available: true,
			waitTime: 0
		});

		Agents.insert({
			companyId: penskeCompanyId,
			firstName: 'Sheila',
			lastName: 'Bleyhl',
			email: 'sheila.bleyhl@unmc.com',
			phoneNumber: '(402) 123-4567',
			videoLink: 'www.support.com/blehylvideo',
			imageUrl: '/res/Girl3.jpg',
			available: true,
			waitTime: 0
		});

		//Agent 2
		Agents.insert({
			companyId: penskeCompanyId,
			firstName: 'Lizzy',
			lastName: 'Jacobsen',
			email: 'lizzy.jacobsen@unmc.com',
			phoneNumber: '(402) 555-3947',
			videoLink: 'www.support.com/jacobsenvideo',
			imageUrl: '/res/Girl2.jpg',
			available: false,
			waitTime: 11
		});

		//Agent 3
		Agents.insert({
			companyId: penskeCompanyId,
			firstName: 'Jordan',
			lastName: 'Swift',
			email: 'jordan.swift@unmc.com',
			phoneNumber: '(402) 555-3129',
			videoLink: 'www.support.com/swiftvideo',
			imageUrl: '/res/Girl1.jpeg',
			available: false,
			waitTime: 4
		});

		//Agent 4
		Agents.insert({
			companyId: penskeCompanyId,
			firstName: 'Spencer',
			lastName: 'Nussrallah',
			email: 'spencer.nussrallah@unmc.com',
			phoneNumber: '(402) 555-9394',
			videoLink: 'www.support.com/nussrallahvideo',
			imageUrl: '/res/agent4.jpeg',
			available: true,
			waitTime: 0
		});

		//Agent 5
		Agents.insert({
			companyId: penskeCompanyId,
			firstName: 'Matt',
			lastName: 'Meacham',
			email: 'matt.meacham@unmc.com',
			phoneNumber: '(402) 555-2010',
			videoLink: 'www.support.com/meachamvideo',
			imageUrl: '/res/agent5.jpeg',
			available: false,
			waitTime: 2
		});

		//Agent 6
		Agents.insert({
			companyId: penskeCompanyId,
			firstName: 'Len',
			lastName: 'Slade',
			email: 'len.slade@unmc.com',
			phoneNumber: '(402) 555-1282',
			videoLink: 'www.support.com/sladevideo',
			imageUrl: '/res/Man1.jpeg',
			available: true,
			waitTime: 0
		});
	}

	// Initialize the Videos database (for testing)
	if(Videos.find({}).fetch().length <= 0) {
		// Video 1
		Videos.insert({
			companyId: csgiCompanyId,
			videoName: 'Bellevue Medical Center - Dedicated to a Healthier You',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/hqdefault-3.jpg',
			videoUrl: 'https://www.youtube.com/embed/97CsFcFWlwg',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: csgiCompanyId,
			videoName: 'Low Dose Radiology - Bellevue Medical Center',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/hqdefault.jpg',
			videoUrl: 'https://www.youtube.com/embed/YQRrUEjsdSY',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: csgiCompanyId,
			videoName: 'Bellevue Medical Center Is',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/hqdefault-4.jpg',
			videoUrl: 'https://www.youtube.com/embed/aEG_6qu2A0',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: csgiCompanyId,
			videoName: 'Sinuplasty - Bellevue Medical Center',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/hqdefault-2.jpg',
			videoUrl: 'https://www.youtube.com/embed/jpWGhfLdzb8',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: coxCompanyId,
			videoName: 'Mayo Clinic’s First Face Transplant: The Surgery',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Cox.jpg',
			videoUrl: 'https://www.youtube.com/embed/Qu7665Q2ZP0',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: coxCompanyId,
			videoName: 'Mayo Clinic Minute: 3 tips for controlling sugar in your diet',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Cox1.jpg',
			videoUrl: 'https://www.youtube.com/embed/XjduuSiWDRI',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: coxCompanyId,
			videoName: 'Mayo Clinic Minute: Exercise and your brain',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Cox2.jpg',
			videoUrl: 'https://www.youtube.com/embed/ZER-tofPbFg',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: coxCompanyId,
			videoName: 'Mayo Clinic Minute: How often do kids need to shampoo?',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Cox3.jpg',
			videoUrl: 'https://www.youtube.com/embed/oLObS8FuNno',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: virginCompanyId,
			videoName: 'Mount Sinai Spotlight: IBS and FODMAP Diet',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/VirginMobile.jpg',
			videoUrl: 'https://www.youtube.com/embed/UFrZkrLD1Zo',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: virginCompanyId,
			videoName: 'Mount Sinai Spotlight: Sleep Apnea And Alzheimer Disease',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/VirginMobile1.jpg',
			videoUrl: 'https://www.youtube.com/embed/7niGvoGyNzs',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: virginCompanyId,
			videoName: 'Meet Mount Sinai TA: Which value best describes you?',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/VirginMobile2.jpg',
			videoUrl: 'https://www.youtube.com/embed/XSv2d6bwBt8',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: virginCompanyId,
			videoName: 'The Future of Science Now: Innovation at Mount Sinai',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/VirginMobile3.jpg',
			videoUrl: 'https://www.youtube.com/embed/yc9CwY1XLpU',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: verizonCompanyId,
			videoName: 'LiveWell After Breast Cancer | Core Workout',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Verizon.jpg',
			videoUrl: 'https://www.youtube.com/embed/4ZfQVYeMiC4',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: verizonCompanyId,
			videoName: 'Tour the New Facilities at The Johns Hopkins Hospital',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Verizon1.jpg',
			videoUrl: 'https://www.youtube.com/embed/frUpcT-GzwA',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: verizonCompanyId,
			videoName: 'Johns Hopkins Episode trailer at abcnews.com',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Verizon2.jpg',
			videoUrl: 'https://www.youtube.com/embed/Q4gFuCiG5AY',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: verizonCompanyId,
			videoName: 'The Spirit of Johns Hopkins Neurosurgery',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Verizon3.jpg',
			videoUrl: 'https://www.youtube.com/embed/VRr9JJfupuo',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: charterCompanyId,
			videoName: 'Title: Interdisciplinary Approach at Cleveland Clinic Taussig Cancer Center',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Charter.jpg',
			videoUrl: 'https://www.youtube.com/embed/FaXV_tusjvQ',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: charterCompanyId,
			videoName: 'Our Opinions Mattered” | Cleveland Clinic Taussig Cancer Center',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Charter1.jpg',
			videoUrl: 'https://www.youtube.com/embed/deFOZDk6OM8',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: charterCompanyId,
			videoName: 'Entrance Built Around Our Patients | Cleveland Clinic Taussig Cancer Center',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Charter2.jpg',
			videoUrl: 'https://www.youtube.com/embed/bf9Xd5IX8mM',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: charterCompanyId,
			videoName: 'Light is Life | Cleveland Clinic Taussig Cancer Center',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Charter3.jpg',
			videoUrl: 'https://www.youtube.com/embed/0FpUhtLfDOQ',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: dishCompanyId,
			videoName: 'Mapping out a plan for concussion care: Brittons story',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Dish.jpg',
			videoUrl: 'https://www.youtube.com/embed/IxuLyLOoFlM',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: dishCompanyId,
			videoName: 'Emergency Nursing at Methodist Hospital',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Dish1.jpg',
			videoUrl: 'https://www.youtube.com/embed/GWULs9e9sJo',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: dishCompanyId,
			videoName: 'Methodist Hospital - Advanced Wound Healing Center',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Dish2.jpg',
			videoUrl: 'https://www.youtube.com/embed/5c3oUoaHa3M',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: dishCompanyId,
			videoName: 'Methodist Healthcare Womens Pavilion - San Antonio',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Dish3.jpg',
			videoUrl: 'https://www.youtube.com/embed/DF37I2D51Vk',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: comcastCompanyId,
			videoName: 'CHI Healths Lung Health Center',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Comcast.jpg',
			videoUrl: 'https://www.youtube.com/embed/cuU0dlo4z50',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: comcastCompanyId,
			videoName: 'CHI Health Cardiologist Dr. Joseph Thibodeau',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Comcast1.jpg',
			videoUrl: 'https://www.youtube.com/embed/QEtcacwww7E',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: comcastCompanyId,
			videoName: 'Improvements at Alegent Health Bergan Mercy Medical Center',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Comcast2.jpg',
			videoUrl: 'https://www.youtube.com/embed/GXlnja_0E7w',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: comcastCompanyId,
			videoName: 'Experience the Improvements at Bergan Mercy Medical Center',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/Comcast3.jpg',
			videoUrl: 'https://www.youtube.com/embed/eKQM9xydrFo',
			agent: Agents.find({}).fetch()[3]
		});
		//Video 1
		Videos.insert({
			companyId: penskeCompanyId,
			videoName: 'Spreading Goodness at Race for the Cure - Nebraska Medicine',
			live: true,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/ATT.jpg',
			videoUrl: 'https://www.youtube.com/embed/ELJiwGOXeAs',
			agent: Agents.find({}).fetch()[0]
		});

		// Video 2
		Videos.insert({
			companyId: penskeCompanyId,
			videoName: 'Nurse Rescues Khloes Christmas Tree - Nebraska Medicine',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/ATT1.jpg',
			videoUrl: 'https://www.youtube.com/embed/L_bB6ToV8UQ',
			agent: Agents.find({}).fetch()[1]
		});

		// Video 3
		Videos.insert({
			companyId: penskeCompanyId,
			videoName: 'Mens Health - Nebraska Medicine',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/ATT2.jpg',
			videoUrl: 'https://www.youtube.com/embed/SB7WOBd3_yM',
			agent: Agents.find({}).fetch()[2]
		});

		// Video 4
		Videos.insert({
			companyId: penskeCompanyId,
			videoName: 'What is Melanoma? - Nebraska Medicine',
			live: false,
			datePublished: new Date(),
			imageUrl: '/res/YouTubeThumbnails/ATT3.jpg',
			videoUrl: 'https://www.youtube.com/embed/epMqgs7g4cc',
			agent: Agents.find({}).fetch()[3]
		});
	}
});
