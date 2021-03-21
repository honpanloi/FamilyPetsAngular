import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person/person';
import { Request } from 'src/app/models/request/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient:HttpClient, private cookieService:CookieService) { }

  person:Person = new Person(0,"","","",true,new Date(),"","")
  request:Request = new Request(0,"","", new Date(), new Date(), "", "", this.person, this.person)
 

  newRequest(request:Request):Observable<any>{
    return this.httpClient.post<Request>('http://3.141.97.16:8080/request/create', request);
  }

  viewRequests(buyerid:number, requeststatus:string):Observable<any>{
    return this.httpClient.get('http://3.141.97.16:8080/request/view/'+buyerid+'/'+requeststatus);
  }

  viewPending():Observable<any>{

    this.person = JSON.parse(this.cookieService.get("person"))
    
    if(this.person.isbreeder){
      return this.httpClient.get('http://3.141.97.16:8080/request/pending');
    }
    else{
      return this.httpClient.get('http://3.141.97.16:8080/request/view/' +this.person.personid+ '/pending');
    }
  }

  accept(request:Request):Observable<any>{
    return this.httpClient.post<Request>('http://3.141.97.16:8080/request/update', request);
  }

  update(request:Request):Observable<any>{
    return this.httpClient.post<Request>('http://3.141.97.16:8080/request/update/animaltype', request);
  }



  viewAccepted():Observable<any>{
    
    this.person = JSON.parse(this.cookieService.get("person"))

    if(this.person.isbreeder){
      return this.httpClient.get('http://3.141.97.16:8080/request/resolved/'+this.person.personid);
    }
    else{
      return this.httpClient.get('http://3.141.97.16:8080/request/view/' +this.person.personid+ '/accepted')
    }

  }

}
