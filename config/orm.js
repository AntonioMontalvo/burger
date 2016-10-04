/*
Here is the O.R.M. where you write functions that takes inputs and conditions and turn them into database commands like SQL.
*/
var connection = require('../config/connection.js');

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}


var orm = {//this object contains all the methods that allow us to pass and get data to mysql.

	selectAll: function(tableInput, cb){//the orm.all method selects all columns from burgers table and 'stores' the result from that query in a callback function. It will 'release' the result when the argument cb is passed to this method.
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});

	},

	insertOne: function (table, cols, vals, cb){
		var queryString = 'INSERT INTO ' + table;

		queryString = queryString + ' (';
		queryString = queryString + cols.toString();
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQuestionMarks(vals.length);//this call the function above.
		queryString = queryString + ') ';

		console.log(queryString);

		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	updateOne: function (){

	}
};



module.exports = orm;

//These are the methods you will need to use in order to retrieve and store data in your database.

