import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login/login';
import { Person } from 'src/app/models/person/person';
import { CookieService } from 'ngx-cookie-service';

// import { Login } from "./models/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginClass: Login = new Login("","");
  constructor(private httpClient:HttpClient, private cookieService:CookieService) {}

  returnedPerson: Observable <Person> = new Observable;
  login(email:String, password:String): Observable <Person>
  {
    
    this.loginClass.email = email;
    this.loginClass.password = password;
    
    

    this.returnedPerson = this.httpClient.post<Person>('http://3.141.97.16:8080/login?email='+email+'&password='+password, "", { });

    this.returnedPerson.subscribe(
      (data) => {
        
        this.cookieService.set("person", JSON.stringify(data));
        console.log(JSON.parse(this.cookieService.get("person")));
      },
      () => {

      }
    )

    return this.returnedPerson;
  }

}
