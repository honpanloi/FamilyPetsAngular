import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Person } from 'src/app/models/person/person';
import { Request } from 'src/app/models/request/request';
import { RequestService } from 'src/app/services/request/request.service';

@Component({
  selector: 'app-submit-request',
  templateUrl: './submit-request.component.html',
  styleUrls: ['./submit-request.component.css']
})
export class SubmitRequestComponent implements OnInit {

  constructor(private requestService:RequestService, private cookieService:CookieService, private router:Router) { }

  ngOnInit(): void {
  }

  person:Person = new Person(0,"","","",true,new Date(),"","")
  request:Request = new Request(0,"","", new Date(), new Date(), "", "", this.person, this.person)
  person2:Person = new Person(0,"","","",true,new Date(),"","")

  newRequest(){
    this.request.dateaccepted=new Date(0);
    this.request.requeststatus="pending";
    this.person=JSON.parse(this.cookieService.get("person"))
    this.request.buyerid=this.person;
    this.request.breederid=this.person2;
    
    this.requestService.newRequest(this.request).subscribe(
    (Data) => {console.log(this.request)},
      () => {console.log("Please try again.")}
    )}

    moveToAnotherPage(value : string){
      this.router.navigate([value], {skipLocationChange: true});
    }


}
