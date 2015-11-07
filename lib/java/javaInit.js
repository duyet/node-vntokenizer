"use strict";
var fs = require("fs");
var path = require('path');
var java = require("java");
var baseDir = path.join(__dirname, "../dependency");

var dependencies = fs.readdirSync(baseDir);

dependencies.forEach(function(dependency){
	console.log("Load jar file:", baseDir + "/" + dependency);
	java.classpath.push(baseDir + "/" + dependency);
});

exports.getJavaInstance = function() {
	console.log("Loading jar file finish.\n============================= \n\n");
	return java;
}