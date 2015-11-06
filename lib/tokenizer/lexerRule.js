'use strict';

/**
 * A lexical rule.
 */
var LexerRule = {
	/**
	 * The name of the lexical category that this rule matches
	 */
	name: '',

	/**
	 * The regular expression used for matching
	 */
	regex: false,
	/**
	 * A pre-compiled pattern object, kept to save processing time
	 */
	pattern: false,

	/**
	 * Instantiate a new lexical rule with a name and a regex
	 * 
	 * @param name
	 *            a name
	 * @param regex
	 *            a regular expression
	 */
	LexerRule: function(name, regex) {
		this.name = name || '';
		this.regex = regex || '';
	},

	/**
	 * Get the category name
	 * 
	 * @return the name of rule
	 */
	getName: function() {
		return this.name;
	},

	/**
	 * Get the regex defining the rule
	 * 
	 * @return the regex
	 */
	getRegex: function() {
		return this.regex;
	},

	/**
	 * Return the pattern object. Create one if it hasn't been created already.
	 * 
	 * @return the pattern object
	 */
	getPattern: function() {
		if (this.pattern == null) {
			this.pattern = new RegExp(this.regex);
		}
		return this.pattern;
	},

	/**
	 * Return a string representation of the rule
	 */
	toString: function() {
		return "[" + this.name + "]";
	}
}

module.exports = LexerRule;