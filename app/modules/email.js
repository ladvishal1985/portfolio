var nodemailer = require('nodemailer');

module.exports = function() {
	var mailTransport = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user:'scripterszone@gmail.com',
			pass:'vishal123..'
		}
	});

	var from = '"Scripter Square" <contact@scriptersquare.com>';
	var errorRecipient = 'ladvishal1985@gmail.com';

	return {
		send: function(to, subj, body) {
			mailTransport.sendMail({
				from:from,
				to: to,
				subject: subj,
				html: JSON.stringify(body),
				generateTextFromHtml: true
			}, function(err){
				if(err) console.error('Unable to Send email:'+err);
			});
			console.log("Email Sent Successfully!!");
		},
		
		emailError: function(message, filename, exception) { 
			var body = '<h1>Error</h1>' + message;
			mailTransport.sendMail({
				from:from,
				to: errorRecipient,
				subject: Error,
				html: body,
				generateTextFromHtml: true
			}, function(err){
				if(err) console.error('Unable to Send email:'+err);
			});
		}
	}
}