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
    return this.httpClient.post<Request>('http://localhost:8080/request/create', request);
  }

}
