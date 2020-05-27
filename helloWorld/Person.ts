import { PersonOptions } from "./PersonOptions";

export class Person implements PersonOptions {
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

  public static createPerson(): Person {

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