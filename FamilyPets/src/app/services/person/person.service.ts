import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/person/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient:HttpClient) { }

  person: Person = new Person(0, "", "", "", true, new Date(), "", "")

  viewInfomation():Observable<Person>{
    return this.httpClient.get<any>('http://localhost:8080/person/view');
  }
}
