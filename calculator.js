'use strict'

class Calculator {
  //write your code here
  constructor () {
    this._value = 0;
    this._pi = Math.PI;
  }
  
  get value() {
    return this._value;
  }

  set value(number) {
    this._value = number;
  }

  reset() {
    this.value = 0;
  }

  get pi() {
    return this._pi;
  }
  add (number) {
    this.value += number;
    return this;
  }
  subtract (number) {
    this.value -= number;
    return this;
  }
  multiply (number) {
    this.value *= number;
    return this;
  }
  divide (number) {
    this.value /= number;
    return this;
  }
  square (number) {
    this.value = Math.pow(this.value, number);
    return this;
  }
  squareRoot () {
    this.value = Math.sqrt(this.value);
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
