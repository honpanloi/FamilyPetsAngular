import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person/person';
import { PersonService } from 'src/app/services/person/person.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  person:Person = new Person(0, "", "", "", true, new Date(), "", "");
  constructor(private personService:PersonService, private router:Router) { }

  ngOnInit(): void {
    this.viewInformation();
  }

  personid:String = "";
  viewInformation(){
    this.personService.viewInfomation().subscribe(
      (data) => {
        this.person = data;

        console.log(this.person)
      },
      () => {

      }
    )
  }

  moveToAnotherPage(value : string){
    this.router.navigate([value], {skipLocationChange: true});
  }

}
