
import { Person } from "./Person";

function sayHello(person: string): string {
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

var jim: Person = new Person("Jim", "Jones", 28, 816751342, "Los Angeles", "CA", 90019, "Handy Man");

const person1 = document.getElementById("person1");
if (person1) {
  person1.innerHTML = jim.fullName() + " " + jim.location();
}

var james: Person = new Person("James", "Wilson", 31, 7046783941, "Charlotte", "NC", 28277, "Doctor");

const person2 = document.getElementById("person2");
if (person2) {
  person2.innerHTML = james.nameAndNumber();
}

var paul: Person = new Person("Paul", "Milsap", 33, 3945847904, "Salt Lake City", "Utah", 90019, "Basketball Player");

const person3 = document.getElementById("person3");
if (person3) {
  person3.innerHTML = paul.nameAndOccupation();
}

const person4 = document.getElementById("person4");
var tyrone: Person = new Person("Tyrone", "Lawson", 24, 4356690465, "Atlanta", "GA", 45776, "Artist");

if (person4) {
  person4.innerHTML = tyrone.getWage(36);
  tyrone.addCerts("PHD", "BA", "CSM");
  tyrone.getCerts().forEach(e => {
    person4.append(e);

  });
}

