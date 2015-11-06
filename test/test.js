var assert = require('assert');
var Tokenizer = require('../index.js');
var token = new Tokenizer();

describe('Tokenizer', function() {
	it ('should be tokenized vietnamese words', function() {
		assert.deepEqual([ 'Le', 'Van', 'Duyet' ], token.tokenize('Le Van Duyet'));
		assert.deepEqual([ 'Lê', 'Văn', 'Duyệt' ], token.tokenize('Lê Văn Duyệt'));
		assert.deepEqual([ 'Tôi', 'tên', 'là', 'Duyệt', 'Test', 'chơi', 'vậy', 'thôi', 'Không', 'biết', 'có', 'đúng', 'hay', 'không', 'nữa' ], token.tokenize('Tôi tên là Duyệt. Test chơi vậy thôi!! Không biết có đúng hay không nữa?'));
	});

	it ('should be remove not word charactors', function() {
		assert.deepEqual([ 'Lê', 'Văn', 'Duyệt' ], token.tokenize('!!!Lê!!Văn          Duyệt'));
	});
});