/*
Here is the O.R.M. where you write functions that takes inputs and conditions and turn them into database commands like SQL.
*/
var connection = require('../config/connection.js');

var orm = {//this object contains all the methods that allow us to pass and get data to mysql.

	selectAll: function(tableInput, cb){//the orm.all method selects all columns from burgers table and 'stores' the result from that query in a callback function. It will 'release' the result when the argument cb is passed to this method.
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});

	},

	insertOne: function (){

	},

	updateOne: function (){

	}
};



module.exports = orm;

//These are the methods you will need to use in order to retrieve and store data in your database.

