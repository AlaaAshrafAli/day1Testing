const { createArray } = require('../index');
var chai = require('chai');
var expect=chai.expect;
var assert=chai.assert;
var should=chai.should();
//sum
//suite=>group of test cases for sum function

describe('createArray', () => {
    let initialValue = 1;
  
    beforeEach(() => {
      Value++;
    });
  
    // Using the 'expect' style
    it('should return an array (expect style)', () => {
      const result = createArray(Value);
      expect(result).to.be.an('array');
    });
  
    // 'should' 
    it('should return an array of the specified length (should style)', () => {
      const result = createArray(Value);
      result.should.be.an('array').with.lengthOf(Value);
    });
  
    // 'assert' 
    it('should include 1 (assert style)', () => {
      const result = createArray(Value);
      assert.isArray(result, ' not array');
      assert.include(result, 1, 'not have 1');
    });
  
    //Pending 
    it('should create a pending test', () => {
    
    });
  });