var emailService   = require('./modules/email.js')();
var getDataService   = require('./modules/data.js')();
var getPortfolioService   = require('./modules/portfoliodata.js')();

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('', function(req, res) {
		res.sendfile('./public/index.html');
	});

	/**Send and Email
	*/
	app.post('/api/sendEmail',function(req, res) {
		console.log('Inside Email'+ JSON.stringify(req.body)); 
		var params = req.body;
		emailService.send('ladvishal1985@gmail.com', 'Someone tried to contact you!', params);
		res.json({'Message': "Message Sent !"});
	});
	
	/**Get Data for Skills Page
	*/
	app.get('/api/skills',function(req, res) {
		var data = getDataService.getSkills();
		res.json(data);
	});

	/**Get Data for Portfolio Page
	*/
	app.get('/api/work',function(req, res) {
		var data = getPortfolioService.getPortfolio();
		res.json(data);
	})
};