var path = require('path');
var fs = require('fs');

var javaInit = require('./javaInit');
var java = javaInit.getJavaInstance();

var FileInputStream 			= java.import("java.io.FileInputStream");

var SentenceDetector 			= java.import("vn.hus.nlp.sd.SentenceDetector");
var SentenceDetectorFactory 	= java.import("vn.hus.nlp.sd.SentenceDetectorFactory");
var TokenizerOptions 			= java.import("vn.hus.nlp.tokenizer.TokenizerOptions");
var VietTokenizer 				= java.import("vn.hus.nlp.tokenizer.VietTokenizer");
var FileIterator 				= java.import("vn.hus.nlp.utils.FileIterator");
var TextFileFilter 				= java.import("vn.hus.nlp.utils.TextFileFilter");

var nTokens = 0;


var property = java.newInstanceSync("java.util.Properties");
var propertyFile = new FileInputStream(path.resolve('lib/java/tokenizer.properties'));
property.loadSync(propertyFile)

var tokenizer = new VietTokenizer(property);

//var w = tokenizer.tokenizeSync(["Xin chào, tôi tên là Lê Văn Duyệt"], ["Xin chào, tôi tên là Lê Văn Duyệt"]);
//console.log(w);

var senDetector = SentenceDetectorFactory.createSync("vietnamese");
