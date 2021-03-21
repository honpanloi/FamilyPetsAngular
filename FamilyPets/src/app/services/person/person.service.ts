import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient:HttpClient, private cookieService:CookieService) { }

  person: Person = new Person(0, "", "", "", true, new Date(), "", "")

  viewInfomation():Observable<Person>{

    this.person = JSON.parse(this.cookieService.get("person"))
    
    return this.httpClient.get<any>('http://3.141.97.16:8080/person/view/'+this.person.personid);
  }

  updateInformation(person:Person):Observable<Person>{
    return this.httpClient.post<Person>('http://3.141.97.16:8080/person/update', person);
  }

}
