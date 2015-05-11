/**
 * When you write a check, to validate the amount,
 * you have to write the English words for the amount
 * on a seperate line. For example, a check for $123.45
 * has a line with:
 *
 *  one hundred forty three and 45/100s dollars
 *
 *  Given a function 'toEnglish' that accepts a JavaScript
 *  'Number' and returns a "String" formatted for use on a
 *  check, as above.
 */

var expect = require('chai').expect;

function toEnglish(number){
  if (number === 1){
    return "one";
  }
  if (number === 2){
    return "two";
  }
  if (number === 3){
    return "three";
  }
  if (number === 4){
    return "four";
  }
  if (number === 5){
    return "five";
  }
  if (number === 6){
    return "six";
  }
  if (number === 7){
    return "seven";
  }
  if (number === 8){
    return "eight";
  }
  if (number === 9){
    return "nine";
  }
  if (number === 10){
    return "ten";
  }
  if (number === 11){
    return "eleven";
  }
  if (number === 12){
    return "twelve";
  }
}
    // ????


// Test comes here....
expect(toEnglish).to.exist;
expect(toEnglish(1)).to.equal("one");
expect(toEnglish(2)).to.equal("two");
expect(toEnglish(3)).to.equal("three");
expect(toEnglish(4)).to.equal("four");
expect(toEnglish(5)).to.equal("five");
expect(toEnglish(6)).to.equal("six");
expect(toEnglish(7)).to.equal("seven");
expect(toEnglish(8)).to.equal("eight");
expect(toEnglish(9)).to.equal("nine");
expect(toEnglish(10)).to.equal("ten");
expect(toEnglish(11)).to.equal("eleven");
expect(toEnglish(12)).to.equal("twelve");
