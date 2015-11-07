var path = require('path');
var fs = require('fs');

var javaInit = require('./javaInit');
var java = javaInit.getJavaInstance();

var FileInputStream 			= java.import("java.io.FileInputStream");

var SentenceDetector 			= java.import("vn.hus.nlp.sd.SentenceDetector");
var SentenceDetectorFactory 	= java.import("vn.hus.nlp.sd.SentenceDetectorFactory");

var senDetector = SentenceDetectorFactory.createSync("vietnamese");
var SentenceDetector = function(string, callback) {
	if (!string) return [];
	var tmpFolder = path.join(__dirname, "../../tmp");
	fs.unlink(tmpFolder + '/SentenceDetectorTmpFile', function(err) {
		if (err) return callback("Can not unlink tmp file.");

		fs.write(tmpFolder + '/SentenceDetectorTmpFile', string, function() {
			var sentences = senDetector.detectSentencesSync(tmpFolder + '/SentenceDetectorTmpFile');
			if (callback) return callback(null, sentences);
		})
	});
}

module.exports = SentenceDetector;