'use strict';

(function() {
    var root = this;
    var has_require = typeof require !== 'undefined';
    
    if (typeof _ === 'undefined') {
        if (has_require) {
            var util = require('util');
            var fs = require('fs');
            var _ = require('lodash');
        } else {

        }
    }

    var vnTokenizer = function(options) {
        var options = options || {};
    };

    // Exports
    if( typeof exports !== 'undefined' ) {
        if( typeof module !== 'undefined' && module.exports ) {
            exports = module.exports = vnTokenizer;
        }
        exports.vnTokenizer = vnTokenizer;
    } else {
        root.vnTokenizer = vnTokenizer;
    }
}).call(this);