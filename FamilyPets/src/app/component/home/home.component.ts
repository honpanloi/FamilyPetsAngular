import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login/login';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login:Login;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

 

  loginFunction(){
    this.loginService.login(this.login.email, this.login.password).subscribe(
      (data) => {
        console.log(data)
      },
      () => {
        console.log("Please try again.")
      }
    )
  }

}
