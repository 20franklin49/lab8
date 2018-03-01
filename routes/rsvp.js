var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */

exports.addRSVP = function(req, res){
	var rsvpEmail = req.body.rsvpEmail;
	// prints in terminal when a POST is made
	console.log(rsvpEmail);
	data.rsvp.push(rsvpEmail); //add to current data
	//send task name back so browser knows it worked out
	res.send(rsvpEmail);
}

exports.adminView = function(req, res){
  res.render('rsvp', data);
};
