import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from "./models/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) {}

  login(email:String, password:String): Observable <any>
  {
    return this.httpClient.post<any>('http://localhost:8080/login', {params: email, password});

  }

}
