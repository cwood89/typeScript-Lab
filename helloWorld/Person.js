"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, city, state, zipCode, occupation) {
        this.wage = 20.00;
        this.certs = new Array();
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
    }
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.nameAndAge = function () {
        return this.fullName() + " is " + this.age + " years old.";
    };
    Person.prototype.nameAndNumber = function () {
        return this.fullName() + "\n" + this.phoneNumber;
    };
    Person.prototype.nameAndOccupation = function () {
        return this.fullName() + " " + this.occupation;
    };
    Person.prototype.location = function () {
        return this.city + ", " + this.state + " " + this.zipCode;
    };
    Person.prototype.getWage = function (hours) {
        if (!this.wage) {
            this.wage = 20.00;
        }
        var pay;
        if (hours) {
            pay = this.wage * hours;
        }
        else {
            pay = this.wage * 40;
        }
        return this.fullName() + "'s weekly pay is " + pay;
    };
    Person.prototype.addCerts = function () {
        var _this = this;
        var certifications = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certifications[_i] = arguments[_i];
        }
        certifications.forEach(function (e) {
            _this.certs.push(e);
        });
    };
    Person.prototype.getCerts = function () {
        return this.certs;
    };
    return Person;
}());
exports.Person = Person;
