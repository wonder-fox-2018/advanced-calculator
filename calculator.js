'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.hasil = 0;
  }

  angkaAwal(input) {
    this.hasil += input;
    return this;
  }

  add (input) {
    this.hasil += input;
    return this;
  }

  subtract (input) {
    this.hasil -= input;
    return this;
  }

  multiply (input) {
    this.hasil *= input;
    return this;
  }

  divide (input) {
    this.hasil /= input;
    return this;
  }

  square (input) {
    this.hasil = Math.pow(this.hasil,input);
    return this;
  }

  squareRoot () {
    this.hasil = Math.PI;
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
