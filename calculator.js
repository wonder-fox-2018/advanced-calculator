
`use strict`

class Calculator {
  constructor(tetap) {
      this.num = tetap
  }

  tambah(num1){
    this.num += num1
    return this
  }
  kurang(num1){

    this.num -= num1
    return this
  }
  kali(num1){
    this.num *= num1
    return this
  }
  bagi(num1){
    this.num /= num1
    return this
  }
  pangkat(num1) {
    // console.log(num1)

    for (var i = 0; i < num1-1; i++) {
      this.num *= this.num
    }
    return this

  }

  lingkaran(){
    // this.num = Math.PI * num1 * num2
    this.num *= Math.PI*2
    return this;
  }
  squareRoot (num1) {
    this.num *= Math.sqrt(num1)
  }
}
let calct = new Calculator()
// console.log(calct.add(2,3))
// console.log(calct.subtract(3,1))
// console.log(calct.multiply(2,3))
// console.log(calct.divide(6,2))
// console.log(calct.square(3,3))
// console.log(calct.squareRoot(3,3))
// console.log(calct.circleArea(3,3))
module.exports = Calculator


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
