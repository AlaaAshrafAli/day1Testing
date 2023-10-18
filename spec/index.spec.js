// Import the function to be tested
const { capitalizeText } = require("./../index.js");


describe('capitalizeText', () => {
  it('should return the string', () => {
    const result = capitalizeText('test');
    expect(typeof result).toBe('string');
  });

  it('should return a capital string', () => {
    const result = capitalizeText('test');
    expect(result).toBe('TEST');
  });

  it('should throw an error if the parameter is not a string', () => {
    expect(() => capitalizeText(123)).toThrowError(TypeError, 'parameter should be string');
  });
});
