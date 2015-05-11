var expect = require('chai').expect;

function toNumber(word){
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

expect(toNumber("zero")).to.equal(0);
expect(toNumber("one")).to.equal(1);
expect(toNumber("two")).to.equal(2);
expect(toNumber("three")).to.equal(3);
expect(toNumber("four")).to.equal(4);
expect(toNumber("five")).to.equal(5);
expect(toNumber("six")).to.equal(6);
expect(toNumber("seven")).to.equal(7);
expect(toNumber("eight")).to.equal(8);
expect(toNumber("nine")).to.equal(9);
expect(toNumber("ten")).to.equal(10);

function plus(a,b){
    var a = toNumber(a);
    var b = toNumber(b);

  if (a === "zero" && b === "zero"){
    var a = 0;
    var b = 0;
  }
  if (a === "zero" && b === "one"){
    var a = 0;
    var b = 1;
  }
  if (a === "zero" && b === "two"){
    var a = 0;
    var b = 2;
  }
  if (a === "zero" && b === "three"){
    var a = 0;
    var b = 3;
  }
  if (a === "zero" && b === "four"){
    var a = 0;
    var b = 4;
  }
  if (a === "zero" && b === "five"){
    var a = 0;
    var b = 5;
  }
  if (a === "zero" && b === "six"){
    var a = 0;
    var b = 6;
  }
  if (a === "zero" && b === "seven"){
    var a = 0;
    var b = 7;
  }
  if (a === "zero" && b === "eight"){
    var a = 0;
    var b = 8;
  }
  if (a === "zero" && b === "nine"){
    var a = 0;
    var b = 9;
  }
  if (a === "one" && b === "zero"){
    var a = 1;
    var b = 0;
  }
  if (a === "one" && b === "one"){
    var a = 1;
    var b = 1;
  }
  if (a === "one" && b === "two"){
    var a = 1;
    var b = 2;
  }
  if (a === "one" && b === "three"){
    var a = 1;
    var b = 3;
  }
  if (a === "one" && b === "four"){
    var a = 1;
    var b = 4;
  }
  if (a === "one" && b === "five"){
    var a = 1;
    var b = 5;
  }
  if (a === "one" && b === "six"){
    var a = 1;
    var b = 6;
  }
  if (a === "one" && b === "seven"){
    var a = 1;
    var b = 7;
  }
  if (a === "one" && b === "eight"){
    var a = 1;
    var b = 8;
  }
  if (a === "one" && b === "nine"){
    var a = 1;
    var b = 9;
  }
  if (a === "two" && b === "zero"){
    var a = 2;
    var b = 0;
  }
  if (a === "two" && b === "one"){
    var a = 2;
    var b = 1;
  }
  if (a === "two" && b === "two"){
    var a = 2;
    var b = 2;
  }
  if (a === "two" && b === "three"){
    var a = 2;
    var b = 3;
  }
  if (a === "two" && b === "four"){
    var a = 2;
    var b = 4;
  }
  if ( a === "two" && b === "five"){
    var a = 2;
    var b = 5;
  }
  if (a === "two" && b === "six"){
    var a = 2;
    var b = 6;
  }
  if (a === "two" && b === "seven"){
    var a = 2;
    var b = 7;
  }
  if (a === "two" && b === "eight"){
    var a = 2;
    var b = 8;
  }
  if (a === "two" && b === "nine"){
    var a = 2;
    var b = 9;
  }
  if ( a === "three" && b === "zero"){
    var a = 3;
    var b = 0;
  }
  if ( a === "three" && b === "one"){
    var a = 3;
    var b = 1;
  }
  if ( a === "three" && b === "two"){
    var a = 3;
    var b = 2;
  }
  if ( a === "three" && b === "three"){
    var a = 3;
    var b = 3;
  }
  if ( a === "three" && b === "four"){
    var a = 3;
    var b = 4;
  }
  if ( a === "three" && b === "five"){
    var a = 3;
    var b = 5;
  }
  if ( a === "three" && b === "six"){
    var a = 3;
    var b = 6;
  }
  if ( a === "three" && b === "seven"){
    var a = 3;
    var b = 7;
  }
  if ( a === "three" && b === "eight"){
    var a = 3;
    var b = 8;
  }
  if ( a === "three" && b === "nine"){
    var a = 3;
    var b = 9;
  }
  if (a === "four" && b === "zero"){
    var a = 4;
    var b = 0;
  }
  if (a === "four" && b === "one"){
    var a = 4;
    var b = 1;
  }
  if (a === "four" && b === "two"){
    var a = 4;
    var b = 2;
  }
  if (a === "four" && b === "three"){
    var a = 4;
    var b = 3;
  }
  if (a === "four" && b === "four"){
    var a = 4;
    var b = 4;
  }
  if (a === "four" && b === "five"){
    var a = 4;
    var b = 5;
  }
  if (a === "four" && b === "six"){
    var a = 4;
    var b = 6;
  }
  if (a === "four" && b === "seven"){
    var a = 4;
    var b = 7;
  }
  if (a === "four" && b === "eight"){
    var a = 4;
    var b = 8;
  }
  if (a === "four" && b === "nine"){
    var a = 4;
    var b = 9;
  }
  if (a === "five" && b === "zero"){
    var a = 5;
    var b = 0;
  }
  if (a === "five" && b === "one"){
    var a = 5;
    var b = 1;
  }
  if (a === "five" && b === "two"){
    var a = 5;
    var b = 2;
  }
  if (a === "five" && b === "three"){
    var a = 5;
    var b = 3;
  }
  if (a === "five" && b === "four"){
    var a = 5;
    var b = 4;
  }
  if (a === "five" && b === "five"){
    var a = 5;
    var b = 5;
  }
  if (a === "five" && b === "six"){
    var a = 5;
    var b = 6;
  }
  if (a === "five" && b === "seven"){
    var a = 5;
    var b = 7;
  }
  if (a === "five" && b === "eight"){
    var a = 5;
    var b = 8;
  }
  if (a === "five" && b === "nine"){
    var a = 5;
    var b = 9;
  }
  if (a === "six" && b === "zero"){
    var a = 6;
    var b = 0;
  }
  if (a === "six" && b === "one"){
    var a = 6;
    var b = 1;
  }
  if (a === "six" && b === "two"){
    var a = 6;
    var b = 2;
  }
  if (a === "six" && b === "three"){
    var a = 6;
    var b = 3;
  }
  if (a === "six" && b === "four"){
    var a = 6;
    var b = 4;
  }
  if (a === "six" && b === "five"){
    var a = 6;
    var b = 5;
  }
  if (a === "six" && b === "six"){
    var a = 6;
    var b = 6;
  }
  if (a === "six" && b === "seven"){
    var a = 6;
    var b = 7;
  }
  if (a === "six" && b === "eight"){
    var a = 6;
    var b = 8;
  }
  if (a === "six" && b === "nine"){
    var a = 6;
    var b = 9;
  }
  if (a === "seven" && b === "zero"){
    var a = 7;
    var b = 0;
  }
  if (a === "seven" && b === "one"){
    var a = 7;
    var b = 1;
  }
  if (a === "seven" && b === "two"){
    var a = 7;
    var b = 2;
  }
  if (a === "seven" && b === "three"){
    var a = 7;
    var b = 3;
  }
  if (a === "seven" && b === "four"){
    var a = 7;
    var b = 4;
  }
  if (a === "seven" && b === "five"){
    var a = 7;
    var b = 5;
  }
  if (a === "seven" && b === "six"){
    var a = 7;
    var b = 6;
  }
  if (a === "seven" && b === "seven"){
    var a = 7;
    var b = 7;
  }
  if (a === "seven" && b === "eight"){
    var a = 7;
    var b = 8;
  }
  if (a === "seven" && b === "nine"){
    var a = 7;
    var b = 9;
  }
  if (a === "eight" && b === "zero"){
    var a = 8;
    var b = 0;
  }
  if (a === "eight" && b === "one"){
    var a = 8;
    var b = 1;
  }
  if (a === "eight" && b === "two"){
    var a = 8;
    var b = 2;
  }
  if (a === "eight" && b === "three"){
    var a = 8;
    var b = 3;
  }
  if (a === "eight" && b === "four"){
    var a = 8;
    var b = 4;
  }
  if (a === "eight" && b === "five"){
    var a = 8;
    var b = 5;
  }
  if (a === "eight" && b === "six"){
    var a = 8;
    var b = 6;
  }
  if (a === "eight" && b === "seven"){
    var a = 8;
    var b = 7;
  }
  if (a === "eight" && b === "eight"){
    var a = 8;
    var b = 8;
  }
  if (a === "eight" && b === "nine"){
    var a = 8;
    var b = 9;
  }
  if (a === "nine" && b === "zero"){
    var a = 9;
    var b = 0;
  }
  if (a === "nine" && b === "one"){
    var a = 9;
    var b = 1;
  }
  if (a === "nine" && b === "two"){
    var a = 9;
    var b = 2;
  }
  if (a === "nine" && b === "three"){
    var a = 9;
    var b = 3;
  }
  if (a === "nine" && b === "four"){
    var a = 9;
    var b = 4;
  }
  if (a === "nine" && b === "five"){
    var a = 9;
    var b = 5;
  }
  if (a === "nine" && b === "six"){
    var a = 9;
    var b = 6;
  }
  if (a === "nine" && b === "seven"){
    var a = 9;
    var b = 7;
  }
  if (a === "nine" && b === "eight"){
    var a = 9;
    var b = 8;
  }
  if (a === "nine" && b === "nine"){
    var a = 9;
    var b = 9;
  }
  return a + b;
}

/*function plus(A, B){
  return toEnglish(A) + toEnglish(B);
} NIGHTMARE
*/

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

expect(plus("one", "zero")).to.equal(1);
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

expect(plus("four", "zero")).to.equal(4);
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

expect(plus("six", "zero")).to.equal(6);
expect(plus("six", "one")).to.equal(7);
expect(plus("six", "two")).to.equal(8);
expect(plus("six", "three")).to.equal(9);
expect(plus("six", "four")).to.equal(10);
expect(plus("six", "five")).to.equal(11);
expect(plus("six", "six")).to.equal(12);
expect(plus("six", "seven")).to.equal(13);
expect(plus("six", "eight")).to.equal(14);
expect(plus("six", "nine")).to.equal(15);

expect(plus("seven", "zero")).to.equal(7);
expect(plus("seven", "one")).to.equal(8);
expect(plus("seven", "two")).to.equal(9);
expect(plus("seven", "three")).to.equal(10);
expect(plus("seven", "four")).to.equal(11);
expect(plus("seven", "five")).to.equal(12);
expect(plus("seven", "six")).to.equal(13);
expect(plus("seven", "seven")).to.equal(14);
expect(plus("seven", "eight")).to.equal(15);
expect(plus("seven", "nine")).to.equal(16);

expect(plus("eight", "zero")).to.equal(8);
expect(plus("eight", "one")).to.equal(9);
expect(plus("eight", "two")).to.equal(10);
expect(plus("eight", "three")).to.equal(11);
expect(plus("eight", "four")).to.equal(12);
expect(plus("eight", "five")).to.equal(13);
expect(plus("eight", "six")).to.equal(14);
expect(plus("eight", "seven")).to.equal(15);
expect(plus("eight", "eight")).to.equal(16);
expect(plus("eight", "nine")).to.equal(17);

expect(plus("nine", "zero")).to.equal(9);
expect(plus("nine", "one")).to.equal(10);
expect(plus("nine", "two")).to.equal(11);
expect(plus("nine", "three")).to.equal(12);
expect(plus("nine", "four")).to.equal(13);
expect(plus("nine", "five")).to.equal(14);
expect(plus("nine", "six")).to.equal(15);
expect(plus("nine", "seven")).to.equal(16);
expect(plus("nine", "eight")).to.equal(17);
expect(plus("nine", "nine")).to.equal(18);


function minus(a, b) {
  var a = toNumber(a);
  var b = toNumber(b);

  if (a === "zero" && b === "zero"){
    a = 0;
    b = 0;
  }
  if (a === "zero" && b === "one"){
    a = 0;
    b = 1;
  }
  if (a === "zero" && b === "two"){
    a = 0;
    b = 2;
  }
  if (a === "zero" && b === "three"){
    a = 0;
    b = 3;
  }
  if (a === "one" && b === "zero"){
    a = 1;
    b = 0;
  }
  if (a === "one" && b === "one"){
    a = 1;
    b = 1;
  }
  if (a === "one" && b === "two"){
    a = 1;
    b = 2;
  }
  if (a === "one" && b === "three"){
    a = 1;
    b = 3;
  }
  if (a ==="two" && b === "zero"){
    a = 2;
    b = 0;
  }
  if (a === "two" && b === "one"){
    a = 2;
    b = 1;
  }
  if (a === "two" && b === "two"){
    a = 2;
    b = 2;
  }
  if (a === "two" && b === "three"){
    a = 2;
    b = 3;
  }
  if (a === "three" && b === "zero"){
    a = 3;
    b = 0;
  }
  if (a === "three" && b === "one"){
    a = 3;
    b = 1;
  }
  if (a === "three" && b === "two"){
    a = 3;
    b = 2;
  }
  if (a === "three" && b === "three"){
    a = 3;
    b = 3;
  }
  return a - b;
}

expect(minus("zero", "zero")).to.equal(0);
expect(minus("zero", "one")).to.equal(-1);
expect(minus("zero", "two")).to.equal(-2);
expect(minus("zero", "three")).to.equal(-3);

expect(minus("one", "zero")).to.equal(1);
expect(minus("one", "one")).to.equal(0);
expect(minus("one", "two")).to.equal(-1);
expect(minus("one", "three")).to.equal(-2);

expect(minus("two", "zero")).to.equal(2);
expect(minus("two", "one")).to.equal(1);
expect(minus("two", "two")).to.equal(0);
expect(minus("two", "three")).to.equal(-1);

expect(minus("three", "zero")).to.equal(3);
expect(minus("three", "one")).to.equal(2);
expect(minus("three", "two")).to.equal(1);
expect(minus("three", "three")).to.equal(0);


function multiply(a, b) {
  var a = toNumber(a);
  var b = toNumber(b);

  if (a === "zero" && b === "zero"){
    a = 0;
    b = 0;
  }
  if (a === "zero" && b === "four"){
    a = 0;
    b = 4;
  }
  if (a === "zero" && b === "five"){
    a = 0;
    b = 5;
  }
  if (a === "zero" && b === "six"){
    a = 0;
    b = 6;
  }
  if (a === "four" && b === "zero"){
    a = 4;
    b = 0;
  }
  if (a === "four" && b === "four"){
    a = 4;
    b = 4;
  }
  if (a === "four" && b === "five"){
    a = 4;
    b = 5;
  }
  if (a === "four" && b === "six"){
    a = 4;
    b = 6;
  }
  return a * b;
}

expect(multiply("zero", "zero")).to.equal(0);
expect(multiply("zero", "four")).to.equal(0);
expect(multiply("zero", "five")).to.equal(0);
expect(multiply("zero", "six")).to.equal(0);

expect(multiply("four", "zero")).to.equal(0);
expect(multiply("four", "four")).to.equal(16);
expect(multiply("four", "five")).to.equal(20);
expect(multiply("four", "six")).to.equal(24);


function divide(a, b){
  var a = toNumber(a)
  var b = toNumber(b)
  if (a === "zero" && b === "five"){
    a = 0;
    b = 5;
    }
      /*return NaN;
    } else if (b === "zero"){
      return Infinity;
    } else {
      return a / b;
    }*/
    return a / b;
  }


// expect(divide("zero", "zero")).to.equal(undefined);
expect(divide).to.exist;
expect(divide("zero", "five")).to.equal(0);
expect(divide("five", "zero")).to.equal(Infinity);
expect(divide("five", "five")).to.equal(1);
// expect(divide("two", "three")).to.equal(.66666);



/* console.log(plus("zero", "zero"));
 console.log(plus("zero", "one"));
 console.log(plus("zero", "two"));

/*function div(a, b){
    if (toNumber(a) === 0 && toNumber(b) === 0);
    return NaN;
  } else if (toNumber(b) === 0);{
    return infinity;
} else {
  return toNumber(a) / toNumber(b);
}*/


/*expect(divide).to.exist;
expect(divide("zero", "NaN")).to.equal(0);
expect(divide("zero", "one")).to.equal(0);*/
