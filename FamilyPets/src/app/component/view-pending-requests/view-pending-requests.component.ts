import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Person } from 'src/app/models/person/person';
import { RequestService } from 'src/app/services/request/request.service';
import { Request } from 'src/app/models/request/request';

@Component({
  selector: 'app-view-pending-requests',
  templateUrl: './view-pending-requests.component.html',
  styleUrls: ['./view-pending-requests.component.css']
})
export class ViewPendingRequestsComponent implements OnInit {

  constructor(private requestService:RequestService, private cookieService:CookieService, private router:Router) { }

  ngOnInit(): void {
    this.viewPending();
  }

  moveToAnotherPage(value : string){
    this.router.navigate([value], {skipLocationChange: true});
  }
  
  
  person:Person = new Person(0,"","","",true,new Date(),"","")
  request:Request = new Request(0,"","", new Date(), new Date(), "", "", this.person, this.person)
  request2:Request = new Request(0,"","", new Date(), new Date(), "", "", this.person, this.person)
  requests:Request[]=[];

  

  viewPending(){
    this.requestService.viewPending().subscribe(
    (data) => {this.requests=data},
    () => {console.log("Please try again.")}
    )}

    accept(){
      this.requestService.accept(this.request.requestid).subscribe(
        (data) => {console.log(data)},
        (error) => {console.log("Please try again")}
      )
    };


}
