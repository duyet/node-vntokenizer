var LexerRule = require('./lexerRule');

/**
 * Create a LexerToken
 * 
 * @param rule
 *            a rule
 * @param text
 *            the text
 * @param line
 *            the line location of the text in a file
 * @param column
 *            the column location of the text in a file
 */
var TaggedWord = function(rule, text, line, column) {
	/**
	 * A lexer rule
	 */
	var rule = rule || null;
	
	/**
	 * The text
	 */
	var text = text || '';

	/**
	 * The line location of the text in the file
	 */
	var line = line || -1;

	/**
	 * The column location of the text in the file
	 */
	var column = column || -1;

	/**
	 * Create a lexer token from a text
	 * 
	 * @param text
	 *            a text
	 */
	public TaggedWord(String text) {
		this.rule = null;
		this.text = text;
		this.line = -1;
		this.column = -1;
	}
	
	/**
	 * Return the rule that matched this token
	 * 
	 * @return the rule that match this token
	 */
	function getRule() {
		return rule;
	}

	/**
	 * Return the text that matched by this token
	 * 
	 * @return the text matched by this token
	 */
	function getText() {
		return text.trim();
	}

	/**
	 * Test if this rule is a phrase rule. A phrase is processed 
	 * by a lexical segmenter.
	 * 
	 * @return true/false
	 */
	function isPhrase() {
		return rule.getName() === "phrase" ? true : false;
	}

	function stringStartsWith (string, prefix) {
    	return string.slice(0, prefix.length) == prefix;
	}

	/**
	 * Test if this rule is a named entity rule.
	 * 
	 * @return true/false
	 */
	function isNamedEntity() {
		return stringStartsWith(rule.getName(), "name");
	}
	
	/**
	 * @return true/false
	 */
	function isDate() {
		return stringStartsWith(rule.getName(), "date");
	}
	
	/**
	 * @return true/false
	 */
	function isDateDay() {
		return stringStartsWith(rule.getName(), "day");
	}
	
	/**
	 * @return true/false
	 */
	function isDateMonth() {
		return stringStartsWith(rule.getName(), "month");
	}

	function isDateYear() {
		return stringStartsWith(rule.getName(), "year");
	}
	
	function isNumber() {
		return stringStartsWith(rule.getName(), "number");
	}
	/**
	 * @return Returns the column.
	 */
	function getColumn() {
		return column;
	}

	/**
	 * @param column
	 *            The column to set.
	 */
	function setColumn(column) {
		this.column = column;
	}

	/**
	 * @return Returns the line.
	 */
	function getLine() {
		return line;
	}

	/**
	 * @param line
	 *            The line to set.
	 */
	function setLine(line) {
		this.line = line;
	}

	/**
	 * Return a string representation of the token
	 */
	function toString() {
		// return "[\"" + text + "\"" + " at (" + line + "," + column + ")]";
		// return rule.getName() + ": " + text;
		return text.trim();
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	function hashCode() {
		return getText().hashCode();
	}
	
	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	function equals(obj) {
		if (obj == null) return false;
		if (!(obj instanceof TaggedWord)) {
			return false;
		}
		// two lexer is considered equal if their text are equal.
		// 
		return ((TaggedWord)obj).getText() == (getText());
	}

	/* (non-Javadoc)
	 * @see java.lang.Comparable#compareTo(java.lang.Object)
	 */
	function compareTo(o) {
		return getText() === o.getText();
	}
}

module.exports = TaggedWord;