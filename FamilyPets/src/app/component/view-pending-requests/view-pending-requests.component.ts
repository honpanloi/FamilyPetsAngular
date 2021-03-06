import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Person } from 'src/app/models/person/person';
import { RequestService } from 'src/app/services/request/request.service';
import { Request } from 'src/app/models/request/request';
import { BreederHomepageComponent } from '../breeder-homepage/breeder-homepage.component';

@Component({
  selector: 'app-view-pending-requests',
  templateUrl: './view-pending-requests.component.html',
  styleUrls: ['./view-pending-requests.component.css']
})
export class ViewPendingRequestsComponent implements OnInit {

  constructor(private requestService:RequestService, private cookieService:CookieService, private router:Router) { }

  ngOnInit(): void {
    this.viewPending();
    this.toggleVisibility();
    this.loggedInPerson=JSON.parse(this.cookieService.get("person"))
  }

  moveToAnotherPage(value : string){
    this.router.navigate([value], {skipLocationChange: true});
  }

  loggedInPerson:Person = new Person(0,"","","",true,new Date(),"","")
  person:Person = new Person(0,"","","",true,new Date(),"","")

  personPage:Person = new Person(0,"","","",true,new Date(),"","")

  request:Request = new Request(0,"","", new Date(), new Date(), "", "", this.person, this.person)
  request2:Request = new Request(0,"","", new Date(), new Date(), "", "", this.person, this.person)
  requests:Request[]=[];
  requestid = 0;
  
  visibility:boolean=false;

  toggleVisibility(){
    if(this.breeder.isbreeder){
      this.visibility = true;
    }
  }

  edited:Boolean = false;

  edit(r:Request){
    console.log(r)
    this.request2 = new Request(r.requestid, r.animal, r.breed, new Date(), r.dateissued, r.photolink, "pending", this.breeder, r.buyerid)
    console.log(this.request2)
    this.requestService.update(this.request2).subscribe(
      (data) => {console.log(data)
      this.viewPending()
      this.edited = !this.edited;
      let confirmMessage = document.createElement("p")
      let formDiv = document.getElementById("title")
      confirmMessage.textContent="Edited"
      formDiv?.append(confirmMessage)    
    },
      () => {console.log("Please try again")}
    )

  }


  viewPending(){
    this.requestService.viewPending().subscribe(
    (data) => {this.requests=data},
    () => {console.log("Please try again.")}
    )}

    breeder:Person = JSON.parse(this.cookieService.get("person"))
    
    accept(r:Request){
      console.log(r)
      this.request2 = new Request(r.requestid, r.animal, r.breed, new Date(), r.dateissued, r.photolink, "accepted", this.breeder, r.buyerid)
      console.log(this.request2)
      this.requestService.accept(this.request2).subscribe(
        (data) => {console.log(data)
        this.viewPending()},
        () => {console.log("Please try again")}
      )
    };


}


