'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num;
  }
  add (addNum) {
    this.num += addNum;
    return this
  }
  subtract (subNum) {
    this.num -= subNum;
    return this
  }
  multiply (multNum) {
    this.num *= multNum;
    return this
  }
  divide (divNum) {
    this.num /= divNum;
    return this
  }
  square (sqNum) {
    this.num = Math.pow(this.num, sqNum);
    return this
  }
  squareRoot () {
    this.num = Math.sqrt(this.num)
    return this
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
