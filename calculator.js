'use strict'

class Calculator {
    constructor (initialNumber) {
        this.initialNumber = initialNumber;
    }

    add (addedBy) {
        this.initialNumber = this.initialNumber + addedBy;
        return this;
    }

    subtract (subtractedBy) {
        this.initialNumber = this.initialNumber - subtractedBy;
        return this;
    }

    multiply (multipliedBy) {
        this.initialNumber = this.initialNumber * multipliedBy;
        return this;
    }

    divide (dividedBy) {
        this.initialNumber = this.initialNumber / dividedBy;
        return this;
    }

    square (squaredBy) {
        var initialNumber = this.initialNumber;
        for (var i = 0; i < squaredBy-1; i++) {
            this.initialNumber = this.initialNumber * initialNumber;
        }

        return this;
    }

    squareRoot () {
        this.initialNumber = Math.sqrt(this.initialNumber);
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

var calculator = new Calculator(36);

console.log(calculator.squareRoot().add(10).add(200).subtract(150).divide(3).multiply(2));

module.exports = Calculator;