'use strict'

class Calculator {
  //write your code here
  constructor(num) {
    this._number = num;
    this._pi=Math.PI;
  }
  view(){
    return this._number;
  }
  circumference(num){
    this._number=2*this._pi*num;
  }
  reset(){
    this._number=0;
  }
  add(num) {
    if (this._number == undefined)
      this._number = num;
    else
      this._number += num;
    return this;
  }
  subtract(num) {
    if (this._number == undefined)
      this._number = num;
    else
      this._number -= num;
    return this;

  }
  multiply(num) {
    if (this._number == undefined)
      this._number = num;
    else
      this._number *= num;
    return this;
  }
  divide(num) {
    if (this._number == undefined)
      this._number = num;
    else
      this._number /= num;
    return this;
  }
  square(num) {
    if (this._number == undefined)
      this._number = 1;
    else
      this._number = Math.pow(this._number,num);
    return this;
  }
  squareRoot(){
    if (this._number == undefined)
      this._number = 1;
    else
      this._number = Math.sqrt(this._number);
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
//const myCalc = new Calculator(10);
//console.log(myCalc.add(9).subtract(4).square(2).squareRoot());


module.exports = Calculator