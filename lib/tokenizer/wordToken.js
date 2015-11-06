'use strict';

var TaggedWord = require('./taggedWord');

/**
 * A word token. It is a lexer token with  
 * an additional information - the part of speech. But in general,
 * we do not use this information.
 * 
 */
var WordToken = function(rule, text, line, column, pos) {
	TaggedWord.apply(this, rule, text, line, column);

	pos = pos || null;
};

WordToken.prototype = TaggedWord.prototype;
WordToken.prototype.constructor = WordToken;

/**
 * Get the parts-of-speech of the token
 * @return parts-of-speech of the token
 */
WordToken.prototype.getPOS = function() {
	return pos;
}

module.exports = WordToken;