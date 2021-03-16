import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: String = "";
  password:String = "";

  setValue(){
    this.email = "";
    this.password = "";
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

 

  login(){
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
