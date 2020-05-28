import { Injectable } from '@angular/core';
import { Person } from "./models/Person"
import { Observable, Subscriber } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PersonService {

  someRandomPerson: Person[] = [
    new Person("Jim", "Jones"),
    new Person("James", "White"),
    new Person("Paul", "Johnson"),
    new Person("Tyrone", "Smith")
  ]
  constructor() { }

  getPerson(): Observable<Person[]> {
    return new Observable(subscriber => {
      this.delay(3000).then(() => {
        subscriber.next(this.someRandomPerson)
        subscriber.unsubscribe();
      })
    })
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms))
  }
}
