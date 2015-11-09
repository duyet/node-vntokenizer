'use strict';

(function() {
    var root = this;
    var has_require = typeof require !== 'undefined';

    if (typeof _ === 'undefined') {
        if (has_require) {
            var util = require("util");
            var _ = require('lodash');
        } else
            throw new Error('vnTokenizer requires underscore');
    }

    var Tokenizer = function() {};

    Tokenizer.prototype.trim = function(array) {
        while (array[array.length - 1] == '')
            array.pop();

        while (array[0] == '')
            array.shift();

        return array;
    };

    // Expose an attach function that will patch String with new methods.
    Tokenizer.prototype.attach = function() {
        var self = this;

        String.prototype.tokenize = function() {
            return self.tokenize(this);
        }
    };

    Tokenizer.prototype.tokenize = function() {};

    // Base Class for RegExp Matching
    var RegexpTokenizer = function(options) {
        options = options || {};
        this._pattern = /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+/;
        this._pattern = options.pattern || this._pattern;
        this.discardEmpty = options.discardEmpty || true;

        // Match and split on GAPS not the actual WORDS
        this._gaps = options.gaps;

        if (this._gaps === undefined) {
            this._gaps = true;
        }
    };

    if (util) util.inherits(RegexpTokenizer, Tokenizer);
    
    RegexpTokenizer.prototype.tokenize = function(s) {
        var results;

        if (this._gaps) {
            results = s.split(this._pattern);
            return (this.discardEmpty) ? _.without(results, '', ' ') : results;
        } else {
            return s.match(this._pattern);
        }
    };


    /***
     * A tokenizer that divides a text into sequences of alphabetic and
     * non-alphabetic characters.  E.g.:
     *
     *      >>> WordTokenizer().tokenize("She said 'hello'.")
     *      ['She', 'said', 'hello']
     * 
     */
    var WordTokenizer = function(options) {
        this._pattern = /\W+/;
        RegexpTokenizer.call(this, options)
    };

    if (util) util.inherits(WordTokenizer, RegexpTokenizer);

    /***
     * A tokenizer that divides a text into sequences of alphabetic and
     * non-alphabetic characters.  E.g.:
     *
     *      >>> WordPunctTokenizer().tokenize("She said 'hello'.")
     *      ['She', 'said', "'", 'hello', "'."]
     * 
     */
    var WordPunctTokenizer = function(options) {
        this._pattern = new RegExp(/(\w+|\!|\'|\"")/i);
        RegexpTokenizer.call(this, options)
    };

    if (util) util.inherits(WordPunctTokenizer, RegexpTokenizer);


    //exports.Tokenizer = Tokenizer;
    //exports.RegexpTokenizer = RegexpTokenizer;
    //exports.WordTokenizer = WordTokenizer;
    //exports.WordPunctTokenizer = WordPunctTokenizer;
    //module.exports = WordTokenizer;

    // Exports
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = RegexpTokenizer;
        }
        exports.Tokenizer = RegexpTokenizer;
    } else {
        root.Tokenizer = RegexpTokenizer;
    }
}).call(this);