module.exports = function() {
	var projects = [
      {id:'0', employer:'Tieto', logo:'', 
        client:"Nordea",
        projectname:"Web Experience Manager(WEM)",
        aboutproject:"The WEM project implements a new Web Content Management System (SDL Tridion) for Nordea.xx open pages.Developed following responsive web design to ensure consistent user-experience across various channel.",
        duration:"Nov-2014 to Present",
        appstack:"SDL Tridion, Spring MVC, JavaScript, SASS/Compass",
        role:["Lead Front-End Developer"] 
      },
      {id:'1', employer:'Accenture', logo:'', 
        client:"Large German Bank",
        projectname:"Cross Channel Banking(Mobile App)",
        aboutproject:"It is a financial cum banking application. Where in user is able to see the snap shots/overview of different areas like Transactions, Finance and Stocks. The application is capable of monitoring the status of joint account holders too. It was enabled with search feature to locate nearest ATMs and branches with the help of GMaps and GPS.",
        duration:"Jun-2013 to Apr-2014",
        appstack:"HTML5/CSS3, JQuery, Phonegap, AngularJS, AngularGM, QUnit, Google Maps, Apache Wicket.",
        role:["Lead Front-End developer.","Architecting the mobile application using AngularJS.", "Helped team members in understanding the concepts of AngularJS.","Act as deputy scrum master when required."] 
      },
      {id:'2', employer:'Accenture', logo:'', 
        client:"Accenture - Sydney",
        projectname:"Virtual Space Reservation System – Mobile",
        aboutproject:"This project started as POC for a client demo and later was rolled out as application for Android and iOS in Sydney for employees. This application was mini application developed to enable users to reserve a space through mobile phones. As one of its module application had a QR Code Scanner that allowed user to Check-In to reserved space or conference hall through camera post reservation .It also allowed user to search for empty space and locate the seats on the maps so that he is able to reserve it. ",
        duration:"Oct-2012 to Mar-2013",
        appstack:"Adobe Flex Mobile, ZXing Barcode scanner, .NET for Web services.",
        role:["Lead Front-End developer.","Architecting the mobile application using Adobe Flex.","Mentored and guided the team members to help them develop in Flex Mobile.","Explored and integrated QR Code Scanner for the application using ZXing.","Helped in reporting the status of the application to the client team"]
      },
      {id:'3', employer:'Accenture', logo:'', 
        client:"Accenture Interactive",
        projectname:"Tech Time-Mobile",
        aboutproject:"Tech Time is sharing platform for executives. Tech Time-Mobile is hybrid mobile application to support viewing of recorded webcasts in Audio and Video format and transcripts which can be accessed online/offline (once downloaded).The key features of this applications were downloading Audio, Video and PDF transcripts all of which were viewable in offline mode. This application used the file operation APIs and was integrated with various plugins like child browser, PDF Viewer, Audio/Video file player etc. It had a support for SSO authentication",
        duration:"Oct-2012  to  April-2013",
        appstack:"HTML5, JavaScript, JQuery, JQuery Mobile, Phonegap, PHP, Drupal",
        role:["Developing UI in HTML 5/CSS3.","Explored Phonegap and its features for the application.","Mentored and guided Application development.","Had been a part for requirement gathering and understanding the project scope.","Integrated SSO for ADFS in mobile native application. Responsible for coding in both Android and iOS"]
 
      },
      {id:'4', employer:'Accenture', logo:'', 
        client:"Large Investment Firm, France",
        projectname:"Secbus",
        aboutproject:"",
        duration:"Mar-2012-Jun-2012",
        appstack:"HTML5, Javascript, Jquery, Backbone.js, Underscore.js, require.js, JAX-RS, MySQL",
        role:["Developing UI in HTML5","Architecting application in Backbone.js","Handling Team and Coordinating with onsite team.","Had been a part for requirement gathering and understanding the project scope."]
      },
      {id:'5', employer:'Accenture', logo:'', 
        client:"Accenture",
        projectname:"Advanced Solution Modeling Tool (ASMT)",
        aboutproject:"This tool helps in creating proposals for Infrastructure Outsourcing Projects. Targeted users are Solution Architects who creates proposals. It allows user to compare Accenture's costing with market data.",
        duration:"Jan-2011 – Jun-2013",
        appstack:"Adobe AIR 3.0, Actionscript 3.0, Java, SQL Server",
        role:["Reverse engineering of the application and prepare architecture diagrams.","Tuning the application for eradicating performance bottlenecks.","Identify the classes of the application and create class diagram","Find and fix performance issues.","Design and code the application modules for new enhancements like creating Excel Templates for reports to be imported into the application.","Worked on making security enhancements to make application more robust."] 
      },
       {id:'6', employer:'Accenture', logo:'', 
        client:"Canada Post",
        projectname:"Precision Targeted",
        aboutproject:"This tool helps in creating proposals for Infrastructure Outsourcing Projects. Targeted users are Solution Architects who creates proposals. It allows user to compare Accenture's costing with market data.",
        duration:"Aug-2011-Mar-2012",
        appstack:"Adobe Flex 4.0, .Net, ESRI Map Servies. Etc.",
        role:["Merging geography and tabular data in a flex application with external calls to .Net services.","Mapping flex and ESRI services.","Developing UI in flex","Architecting the Flex Application","Handling Flex Team and Coordinating with onsite team."] 
      },
      {id:'7', employer:'Idhasoft', logo:'', 
        client:"Talking Threads",
        projectname:"Talking Threads",
        aboutproject:"Project was basically targeted at designing T-Shirts via application.",
        duration:"Feb-2010 - Apr-2010",
        appstack:"Adobe Flex 3.0, PHP, Cairngorm",
        role:["Creating UI using action script 3.0"] 
      },
      {id:'8', employer:'ThoughFX', logo:'', 
        client:"A Product",
        projectname:"Realty Radar",
        aboutproject:"Realty radar is a web based application Aimed at maintaining data of Real Estate Properties. It allowed user to post is requirement and properties for selling. It had facility of sending notifications via Email to the company’s executives.",
        duration:"Sept-2009 to Jan-2010",
        appstack:"Adobe Flex 3.0, ASP.NET 3.5(LINQ), MS SQL",
        role:["Software Developer"]
      },
      {id:'9', employer:'V2Solutions', logo:'', 
        client:"NA",
        projectname:"IDentist and IWeb",
        aboutproject:"IDentist is the web based application for dentists where they can track their cases as well as the master data for patients. The case tracking also includes storage of x Rays and photographs. An application also includes 3D image viewing and editing of patient dental structures. The application also includes ability of purchasing dental equipments from inpronto.com and tracking invoices of orders and payments.IWeb is a collaborative platform for dentist community where they can share their case details as well as other medical information.",
        duration:"Jan-2009 to Aug-2009",
        appstack:"Adobe Flex 3.0, ASP.NET, MS SQL",
        role:["Software Developer"] 
      },
      {id:'10', employer:'V2Solutions', logo:'', 
        client:"Business Endurance Solutions, Fosters",
        projectname:"Various medium scale projects based on Flex, Javacripts, Salesforce APIs",
        aboutproject:"This includes development of no. of projects based on SalesForce on demand platform. These projects include online applications developed with rich user interface in adobe Flex.Developing workflows. The application development span ranges from 1 week to 2 month and most of the times many of them are carried out simultaneously with iterative model. These also include drill down reports and charts.",
        duration:"Aug-2007 to May-2008",
        appstack:"Adobe Flex2.0, SalesForce API for Javascript, Salesforce Triggers, Spring Graph",
        role:"Junior Developer" 
      }
      
      
  ];
	


  return {
		getPortfolio: function() {
			console.log("Inside Get Porfolio!");
			return projects;
		}
	}
}