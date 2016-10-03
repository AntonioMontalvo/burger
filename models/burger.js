/*
Here is where you setup a model for how to interface with the database.
*/
//
var orm = require('../config/orm.js');

//this object contains methods to call the methods on orm and to handle the response for each callback to the methods on orm.
var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function(res){
			cb(res);
		});
	},
	insertOne: function () {
		orm.insertOne('burgers', function(res){
			cb(res);
		});
	},
	updateOne: function () {
		orm.updateOne('burgers', function(res){
			cb(res);
		});
	}
};

module.exports = burger;