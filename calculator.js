'use strict'

class Calculator {
  //write your code here
  constructor (numberInput) {
    this.number = numberInput
  }
  add (addToNumber) {
    this.number=this.number+addToNumber
    return this
  }
  subtract (subToNumber) {
    this.number=this.number-subToNumber
    return this
  }
  multiply (multiplyToNumber) {
    this.number=this.number*multiplyToNumber
    return this
  }
  divide (dividetoNumber) {
    this.number=this.number*dividetoNumber
    return this
  }
  square (squareToNumber) {
    this.number=Math.pow(this.number,squareToNumber)
    return this
  }
  squareRoot (squareRootToNumber) {
    this.number=Math.sqrt(squareRootToNumber)
    return this
  }
  lingkaran (jari2Lingkaran) {
    this.number=Math.PI*jari2Lingkaran
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
