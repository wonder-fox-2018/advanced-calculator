'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.angkaAwal=0
  }
  add (angka) {
    this.angkaAwal+=angka
    return this
  }
  subtract (angka) {
    this.angkaAwal -= angka
    return this
  }
  multiply (angka) {
    if(this.angkaAwal===0){
      this.angkaAwal=angka*1
    } 
    else{
      this.angkaAwal= angka*this.angkaAwal
    }
    return this
  }
  divide (angka) {
    if(this.angkaAwal===0){
      this.angkaAwal=this.angkaAwal/1
    } 
    else{
      this.angkaAwal=this.angkaAwal/angka
    }
    return this
  }
  square (pangkat) {
    let result=Math.pow(this.angkaAwal,pangkat)
    this.angkaAwal=result
    return this
  }
  squareRoot () {
    let result=Math.sqrt(this.angkaAwal)
    this.angkaAwal=result
    return this
  }
  circle(jari){
    this.angkaAwal=Math.PI*Math.pow(jari,2)
    return this;
  }
}
let soal =new Calculator;
console.log(soal.circle(7))


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
