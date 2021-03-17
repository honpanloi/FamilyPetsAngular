import { Component, OnInit } from '@angular/core';
// import { Login } from 'src/app/models/login/login';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  email:string = "";
  password:string ="";
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

 

  loginFunction(){

    // const email2:string = this.email;
    // const password2:string = this.password;
    this.loginService.login(this.email, this.password).subscribe(
      (data) => {
        console.log(data)
      },
      () => {
        console.log("Please try again.")
      }
    )
  }

}
