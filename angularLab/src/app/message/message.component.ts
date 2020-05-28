import { Component, OnInit } from '@angular/core';
import { Person } from "../models/Person";
import { PersonService } from "../person.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  somePerson: Person[];

  constructor(private personService: PersonService) { }
  getPeople() {
    this.personService.getPerson().subscribe(person => {
      this.somePerson = person;
    });
  }

  ngOnInit(): void {
    this.getPeople();
  }
}
