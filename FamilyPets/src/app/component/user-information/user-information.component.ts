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

  person2:Person = new Person(0, "", "", "", true, new Date(), "", "");

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




  updateInformation(){
    this.person2.personid = this.person.personid;
    if(!this.person2.firstname){this.person2.firstname=this.person.firstname}
    if(!this.person2.lastname){this.person2.lastname=this.person.lastname}
    if(!this.person2.dob){this.person2.dob=this.person.dob}
    if(!this.person2.city){this.person2.city=this.person.city}
    if(!this.person2.phonenumber){this.person2.phonenumber=this.person.phonenumber}
    if(!this.person2.email){this.person2.email=this.person.email}
    console.log(this.person2);
    
    this.personService.updateInformation(this.person2).subscribe(
     
      (data) => {
        this.person = data;
        console.log(this.person)
      },
      () => {}
    )
  }


  moveToAnotherPage(value : string){
    this.router.navigate([value], {skipLocationChange: true});
  }

}
