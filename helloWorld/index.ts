
function sayHello(person: string): string {
  return "Hello, " + person;
}

var user = "Super Student";

var hello = document.getElementById("hello");
if (hello) {
  hello.innerHTML = sayHello(user);
}

interface PersonOptions {
  firstName: string;
  lastName: string;
  age?: number;
  phoneNumber?: number;
  city?: string;
  state?: string;
  zipCode?: number;
  occupation?: string;
  wage?: number;
  certs?: string[];
}

class Person {
  firstName: string;
  lastName: string;
  age?: number;
  phoneNumber?: number;
  city?: string;
  state?: string;
  zipCode?: number;
  occupation?: string;
  wage: number = 20.00;
  certs: string[] = new Array();

  constructor(firstName: string, lastName: string, age?: number, phoneNumber?: number, city?: string, state?: string, zipCode?: number, occupation?: string) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.occupation = occupation;

  }

  public static createPerson(data: PersonOptions): Person {
    if (data.age) {
      return new Person(data.firstName, data.lastName, data.age);
    } else {
      return new Person(data.firstName, data.lastName);
    }
  }

  fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  nameAndAge(): string {
    return this.fullName() + " is " + this.age + " years old."
  }

  nameAndNumber(): string {
    return this.fullName() + "\n" + this.phoneNumber;
  }

  nameAndOccupation(): string {
    return this.fullName() + " " + this.occupation;
  }

  location(): string {
    return this.city + ", " + this.state + " " + this.zipCode;
  }

  getWage(hours?: number): string {
    if (!this.wage) {
      this.wage = 20.00
    }
    let pay: number;
    if (hours) {
      pay = this.wage * hours;
    } else {
      pay = this.wage * 40;
    }
    return this.fullName() + "'s weekly pay is " + pay;
  }

  addCerts(...certifications: string[]): void {
    certifications.forEach(e => {
      this.certs.push(e);
    })
  }
  getCerts(): string[] {
    return this.certs;
  }

}

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

var tyrone: Person = Person.createPerson({ firstName: "Tyrone", lastName: "Lawson" });

var tyrone2: Person = Person.createPerson({ firstName: "Tyrone", lastName: "Lawson", age: 24 });
// new Person("Tyrone", "Lawson", , 4356690465, "Atlanta", "GA", 45776, "Artist");
if (person4) {
  person4.innerHTML = tyrone.getWage(36);
  tyrone.addCerts("PHD", "BA", "CSM");
  tyrone.getCerts().forEach(e => {
    person4.append("\n" + e);
  });
}

