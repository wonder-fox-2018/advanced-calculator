'use strict'

class Calculator {
  constructor (angka) {
    this.result = angka
  }
  add (num) {
    this.result += num
    return this
  }
  subtract (num) {
    this.result -= num
    return this
  }
  multiply (num) {
    if(this.result === 0){
      this.result = num*1
      return this
    } else {
      this.result*= num
      return this
    }
  }
  divide (num) {
    if(this.result === 0){
      this.result = num/1
      return this
    }else {
      this.result/= num
      return this
    }
  }
  square (num) {
    this.result = Math.pow(this.result,num)
    return this
  }
  squareRoot () {
    this.result =Math.sqrt(this.result)
    return this
  }
  kostaPi(){
    this.result *= Math.PI * 2
    return this
  }

}

var calc = new Calculator(11)
console.log(calc.add(4).add(10))


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
