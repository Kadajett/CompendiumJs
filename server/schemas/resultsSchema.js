var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resultsSchema = new Schema({
	title : String,
	api : String,
	description : String,
	link : String
});

var results = mongoose.model('Result', resultsSchema);

var test = new results({title: "test title"});

test.save(function(err){
	if(err){
		console.log(err);
		return err;
	}
	//woot
});

mongoose.connect("localhost", "test ");