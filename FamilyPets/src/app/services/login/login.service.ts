import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login/login';
// import { Login } from "./models/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginClass: Login = new Login("","");
  constructor(private httpClient : HttpClient) {}

  login(email:String, password:String): Observable <any>
  {
    
    this.loginClass.email = email;
    this.loginClass.password = password;
    return this.httpClient.post<any>('http://localhost:8080/login?email='+email+'&password='+password, "");

  }

}
