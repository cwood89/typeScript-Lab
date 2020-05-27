"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
var hello = document.getElementById("hello");
if (hello) {
    hello.innerHTML = sayHello(user);
}
// var chris: PersonOptions = function (config: PersonOptions) {
//   if (config.)
// }
var jim = new Person_1.Person("Jim", "Jones", 28, 816751342, "Los Angeles", "CA", 90019, "Handy Man");
var person1 = document.getElementById("person1");
if (person1) {
    person1.innerHTML = jim.fullName() + " " + jim.location();
}
var james = new Person_1.Person("James", "Wilson", 31, 7046783941, "Charlotte", "NC", 28277, "Doctor");
var person2 = document.getElementById("person2");
if (person2) {
    person2.innerHTML = james.nameAndNumber();
}
var paul = new Person_1.Person("Paul", "Milsap", 33, 3945847904, "Salt Lake City", "Utah", 90019, "Basketball Player");
var person3 = document.getElementById("person3");
if (person3) {
    person3.innerHTML = paul.nameAndOccupation();
}
var person4 = document.getElementById("person4");
var tyrone = new Person_1.Person("Tyrone", "Lawson", 24, 4356690465, "Atlanta", "GA", 45776, "Artist");
if (person4) {
    person4.innerHTML = tyrone.getWage(36);
    tyrone.addCerts("PHD", "BA", "CSM");
    tyrone.getCerts().forEach(function (e) {
        person4.append(e);
    });
}
