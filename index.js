'use strict';

(function() {
	exports.lexer = require('./lib/tokenizer/lexer');
	exports.sentenceDetector = require('./lib/java/sentenceDetector');
    exports.tokenizer = require('./lib/tokenizer');
}).call(this);