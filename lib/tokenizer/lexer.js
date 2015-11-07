'use strict';

var lexerRule = require('./lexerRule');
var lexerModel = require('../model/lexicon');

var re = lexerModel;

function LexerNode(string, regex, regexs) {
  this.string = string;
  this.children = [];

  if (string) {
    this.matches = string.match(regex);
    var childElements = string.split(regex);
  }

  if (!this.matches) {
    this.matches = [];
    var childElements = [string];
  }

  if (!regexs.length) {
    // no more regular expressions, we're done
    this.children = childElements;
  } else {
    // descend recursively
    var nextRegex = regexs[0]
      , nextRegexes = regexs.slice(1);

    for (var i in childElements) {
      if (childElements.hasOwnProperty(i)) {
        this.children.push(
          new LexerNode(childElements[i], nextRegex, nextRegexes));
      }
    }
  }
}

LexerNode.prototype.fillArray = function(array){
  for (var i in this.children) {
    if (this.children.hasOwnProperty(i)) {
      var child = this.children[i];

      if (child && child.fillArray) {
        child.fillArray(array);
      } else if (re.unblank.test(child)) {
        array.push(child);
      }

      if (i < this.matches.length) {
        var match = this.matches[i];
        if (re.unblank.test(match))
          array.push(match);
      }
    }
  }
}

LexerNode.prototype.toString = function(){
  var array = [];
  this.fillArray(array);
  return array.toString();
}

function Lexer(string){
  var regexs = [];
  for (var i in lexerModel) regexs.push(lexerModel[i]);

  var array = []
  var node = new LexerNode(string, regexs[0], regexs.slice(1));
  
  node.fillArray(array);
  return array;
}

module.exports = Lexer;