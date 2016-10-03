/*
Here is where you setup a model for how to interface with the database.
*/
//
var orm = require('../config/orm.js');

//this object contains methods to call the methods on orm and to handle the response for each callback to the methods on orm.
var burger = {
	selectAll: function () {
		orm.selectAll(, function(res){
			cb(res);
		});
	},
	insertOne: function () {
		orm.insertOne(, function(res){
			cb(res);
		});
	},
	updateOne: function () {
		orm.updateOne(, function(res){
			cb(res);
		});
	}
};

module.exports = burger;