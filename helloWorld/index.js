"use strict";
function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
var hello = document.getElementById("hello");
if (hello) {
    hello.innerHTML = sayHello(user);
}
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
    Person.createPerson = function (data) {
        if (data.age) {
            return new Person(data.firstName, data.lastName, data.age);
        }
        else {
            return new Person(data.firstName, data.lastName);
        }
    };
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
var jim = new Person("Jim", "Jones", 28, 816751342, "Los Angeles", "CA", 90019, "Handy Man");
var person1 = document.getElementById("person1");
if (person1) {
    person1.innerHTML = jim.fullName() + " " + jim.location();
}
var james = new Person("James", "Wilson", 31, 7046783941, "Charlotte", "NC", 28277, "Doctor");
var person2 = document.getElementById("person2");
if (person2) {
    person2.innerHTML = james.nameAndNumber();
}
var paul = new Person("Paul", "Milsap", 33, 3945847904, "Salt Lake City", "Utah", 90019, "Basketball Player");
var person3 = document.getElementById("person3");
if (person3) {
    person3.innerHTML = paul.nameAndOccupation();
}
var person4 = document.getElementById("person4");
var tyrone = Person.createPerson({ firstName: "Tyrone", lastName: "Lawson" });
var tyrone2 = Person.createPerson({ firstName: "Tyrone", lastName: "Lawson", age: 24 });
// new Person("Tyrone", "Lawson", , 4356690465, "Atlanta", "GA", 45776, "Artist");
if (person4) {
    person4.innerHTML = tyrone.getWage(36);
    tyrone.addCerts("PHD", "BA", "CSM");
    tyrone.getCerts().forEach(function (e) {
        person4.append("\n" + e);
    });
}
