var chai = require('chai')

var assert = chai.assert;
var addWord = require('./app').addWord
var lookItUp = require('./app').lookItUp

describe("Create a dictionary that has words and definitions", function(){
    it("Should add a word and a definition tied to that word", function(){
        assert.equal((addWord('cat', 'a dumb animal')), 'a dumb animal')
    })
    it("Should return the definition of a word we give", function(){
        assert.equal(lookItUp('cat'), 'a dumb animal')
    })
    it("Should not allow plurals of the same word", function(){
        assert.equal(addWord('cats', 'a similar animal'), 
        addWord('cat', 'a animal') )
    })
})