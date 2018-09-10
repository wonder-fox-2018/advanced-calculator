'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num
  }
  add (addNum) {
    this.num += addNum;
    return this;
  }
  subtract (substractNum) {
    this.num -= substractNum;
    return this;
  }
  multiply (multiplyNum) {
    this.num *= multiplyNum;
    return this;
  }
  divide (divideNum) {
    this.num /= divideNum;
    return this;
  }
  square () {
    this.num = Math.pow(this.num, 2);
    return this;
  }
  squareRoot () {
    this.num = Math.sqrt(this.num);
    return this;
  }
  circle () {
    const pi = 3.14;
    this.num  = 2 * pi * this.num;
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator


// TESTCASE:
var test1 = new Calculator(9);
test1.squareRoot().add(5).subtract(2).square().divide(9).multiply(10); 
console.log('test1: ', test1.num);

var test2 = new Calculator(3);
test2.circle().add(2);
console.log('test2: ', test2.num);
