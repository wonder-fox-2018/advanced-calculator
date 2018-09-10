'use strict'

class Calculator {
  //write your code here
  constructor(numberInput){
    this.number = numberInput
  }
  add (num) {
    this.number += num
    return this 
  }
  subtract (num) {
    this.number -= num
    return this 
  }
  multiply (num) {
    this.number *= num
    return this
  }
  divide (num) {
    this.number /= num
    return this
  }
  square (num) {
    this.number = Math.pow(this.number,num)
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
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

let result = new Calculator(0)
console.log(result.add(10).subtract(1).squareRoot().multiply(5).divide(5).square(3))


//console.log(Math.pow(2,3));

module.exports = Calculator