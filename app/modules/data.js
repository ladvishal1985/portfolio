module.exports = function() {
	var skills = [
      {id:'0', name:'HTML5/CSS3',img:'images/htmldev.png', 
        description:"HTML5 and CSS3 have swept the web by storm. Adapt to modern standards to create more dynamic and powerful web pages without plugins.",
        subskill:[{id:"0", name:"HTML5/CSS3", proficiency:"7.5"}, 
                  {id:"1", name:"SASS/Compass", proficiency:"7.5"}, 
                  {id:"2", name:"LESS", proficiency:"5"}]},
      {id:'1', name:'JavaScript',img:'images/js.png',
        description:"Single Page applications are breed of modern web development. Build the apps using modern JavaScript frameworks like AngularJS and BackboneJS along with modern standards like Web Components", 
        subskill:[{id:"0", name:"AngularJS", proficiency:"7.5"}, 
                  {id:"1", name:"BackboneJS", proficiency:"6.5"},
                  {id:"1", name:"Web Components/Polymer", proficiency:"4"}]},
      {id:'2', name:'Tools', img:'images/tooling.png',
        description: "Automating front-end development workflow significantly optimzes of efficiency. Tasks like SASS/LESS compilation or optimization JS/CSS files for performance can be automated using tools like Grunt or Gulp",
        subskill:[{id:"0", name:"Node and NPM", proficiency:"5"}, 
                  {id:"1", name:"Grunt/Gulp/Bower", proficiency:"6.5"} ,
                   {id:"2", name:"Git", proficiency:"6.5"}
                  ]},
      {id:'3', name:'Mobile', img:'images/mobile.png', 
        description: "One code multiple platforms thats the mantra of hybrid apps. Responsive design with Phonegap seems to be the most popular solution to achieving device agnostic web design",
        subskill:[{id:"0", name:"Responsive Design", proficiency:"7"}, 
                  {id:"1", name:"Phonegap", proficiency:"6.5"}]}
  ];
	


  return {
		getSkills: function() {
			console.log("Inside Get Skills!");
			return skills;
		}
	}
}