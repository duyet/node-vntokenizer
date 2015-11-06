'use strict';

/**
 * Instantiate a new lexical rule with a name and a regex
 * 
 * @param name
 *            a name
 * @param regex
 *            a regular expression
 */
var LexerRule = function (name, regex) {
	/**
	 * The name of the lexical category that this rule matches
	 */
	var name =  name || '';

	/**
	 * The regular expression used for matching
	 */
	var regex = regex || false;
	/**
	 * A pre-compiled pattern object, kept to save processing time
	 */
	var pattern = false;

	/**
	 * Get the category name
	 * 
	 * @return the name of rule
	 */
	function getName() {
		return this.name;
	}

	/**
	 * Get the regex defining the rule
	 * 
	 * @return the regex
	 */
	function getRegex() {
		return this.regex;
	}

	/**
	 * Return the pattern object. Create one if it hasn't been created already.
	 * 
	 * @return the pattern object
	 */
	function getPattern() {
		if (this.pattern == null) {
			this.pattern = new RegExp(this.regex);
		}
		return this.pattern;
	}

	/**
	 * Return a string representation of the rule
	 */
	function toString() {
		return "[" + this.name + "]";
	}
}

module.exports = LexerRule;