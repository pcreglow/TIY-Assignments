var expect = require('chai').expect;

function toEnglish(word){
  if ( word === "zero" ){
      return 0;
  }

  if ( word === "one" ){
      return 1;
  }
  if ( word === "two" ){
      return 2;
  }
  if ( word === "three" ){
      return 3;
  }
  if ( word === "four" ){
      return 4;
  }
  if ( word === "five"){
      return 5;
  }
  if ( word === "six"){
      return 6;
  }
  if ( word === "seven"){
    return 7;
  }
  if ( word === "eight"){
    return 8;
  }
  if ( word === "nine" ){
    return 9;
  }
  if ( word === "ten" ){
    return 10;
  }
}

expect(toEnglish("zero")).to.equal(0);
expect(toEnglish("one")).to.equal(1);
expect(toEnglish("two")).to.equal(2);
expect(toEnglish("three")).to.equal(3);
expect(toEnglish("four")).to.equal(4);
expect(toEnglish("five")).to.equal(5);
expect(toEnglish("six")).to.equal(6);
expect(toEnglish("seven")).to.equal(7);
expect(toEnglish("eight")).to.equal(8);
expect(toEnglish("nine")).to.equal(9);
expect(toEnglish("ten")).to.equal(10);

function plus(A, B){
  return toEnglish(A) + toEnglish(B);
}

expect(plus).to.exist;
expect(plus("zero", "zero")).to.equal(0);
expect(plus("zero", "one")).to.equal(1);
expect(plus("zero", "two")).to.equal(2);
expect(plus("zero", "three")).to.equal(3);
expect(plus("zero", "four")).to.equal(4);
expect(plus("zero", "five")).to.equal(5);
expect(plus("zero", "six")).to.equal(6);
expect(plus("zero", "seven")).to.equal(7);
expect(plus("zero", "eight")).to.equal(8);
expect(plus("zero", "nine")).to.equal(9);

// console.log(plus("zero", "zero"));
// console.log(plus("zero", "one"));
// console.log(plus("zero", "two"));

expect(plus("one", "one")).to.equal(2);
expect(plus("one", "two")).to.equal(3);
expect(plus("one", "three")).to.equal(4);
expect(plus("one", "four")).to.equal(5);
expect(plus("one", "five")).to.equal(6);
expect(plus("one", "six")).to.equal(7);
expect(plus("one", "seven")).to.equal(8);
expect(plus("one", "eight")).to.equal(9);
expect(plus("one", "nine")).to.equal(10);

expect(plus("two", "zero")).to.equal(2);
expect(plus("two", "one")).to.equal(3);
expect(plus("two", "two")).to.equal(4);
expect(plus("two", "three")).to.equal(5);
expect(plus("two", "four")).to.equal(6);
expect(plus("two", "five")).to.equal(7);
expect(plus("two", "six")).to.equal(8);
expect(plus("two", "seven")).to.equal(9);
expect(plus("two", "eight")).to.equal(10);
expect(plus("two", "nine")).to.equal(11);

expect(plus("three", "zero")).to.equal(3);
expect(plus("three", "one")).to.equal(4);
expect(plus("three", "two")).to.equal(5);
expect(plus("three", "three")).to.equal(6);
expect(plus("three", "four")).to.equal(7);
expect(plus("three", "five")).to.equal(8);
expect(plus("three", "six")).to.equal(9);
expect(plus("three", "seven")).to.equal(10);
expect(plus("three", "eight")).to.equal(11);
expect(plus("three", "nine")).to.equal(12);

expect(plus("four","zero")).to.equal(4);
expect(plus("four", "one")).to.equal(5);
expect(plus("four", "two")).to.equal(6);
expect(plus("four", "three")).to.equal(7);
expect(plus("four", "four")).to.equal(8);
expect(plus("four", "five")).to.equal(9);
expect(plus("four", "six")).to.equal(10);
expect(plus("four", "seven")).to.equal(11);
expect(plus("four", "eight")).to.equal(12);
expect(plus("four", "nine")).to.equal(13);

expect(plus("five", "zero")).to.equal(5);
expect(plus("five", "one")).to.equal(6);
expect(plus("five", "two")).to.equal(7);
expect(plus("five", "three")).to.equal(8);
expect(plus("five", "four")).to.equal(9);
expect(plus("five", "five")).to.equal(10);
expect(plus("five", "six")).to.equal(11);
expect(plus("five", "seven")).to.equal(12);
expect(plus("five", "eight")).to.equal(13);
expect(plus("five", "nine")).to.equal(14);

console.log(plus("one", "one"));
