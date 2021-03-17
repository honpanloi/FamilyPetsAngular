import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person/person';
import { PersonService } from 'src/app/services/person/person.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.viewInformation();
  }

  person: Person = new Person(0, "", "", "", true, new Date(), "", "")

  viewInformation(){
    this.personService.viewInfomation().subscribe(
      (data) => {
        this.person = data
        console.log(this.person)
      },
      () => {

      }
    )
  }

}
