import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
  constructor(private personService:PersonService, private router:Router, private cookieService:CookieService) { 
    this.loggedInPerson=JSON.parse(this.cookieService.get("person"))
  }
  
  
  loggedInPerson:Person = new Person(0,"","","",true,new Date(),"","")

  ngOnInit(): void {
    this.viewInformation();
  }

  person2:Person = new Person(0, "", "", "", true, new Date(), "", "");

  personid:String = "";
  viewInformation(){
    this.personService.viewInfomation().subscribe(
      (data) => {
        this.person = data;
        this.person.displayDob = this.person.dob.getFullYear() + "-" + this.person.dob.getMonth()+ "-" + this.person.dob.getDay();
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
    this.person2.isbreeder=this.person.isbreeder;
    this.person2.dob=this.person.dob;
    if(!this.person2.city){this.person2.city=this.person.city}
    if(!this.person2.phonenumber){this.person2.phonenumber=this.person.phonenumber}
    if(!this.person2.email){this.person2.email=this.person.email}
    console.log(this.person2);

    this.personService.updateInformation(this.person2).subscribe(
     
      (data) => {
        this.person = this.person2;
        this.cookieService.set("person",JSON.stringify(this.person2))
        console.log("test"+this.cookieService.get("person"))
        console.log(this.person)
      },
      () => {}
    )
  }


  moveToAnotherPage(value : string){
    this.router.navigate([value], {skipLocationChange: true});
  }

  

}
