import { Component, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Person } from 'src/app/models/person/person';
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
  person: Person | undefined;
  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit(): void {
  }
 
  loginFunction(){

    // const email2:string = this.email;
    // const password2:string = this.password;
    this.loginService.login(this.email, this.password).subscribe(
      (data) => { 
        this.person = data;
        if(this.person == null){
          //routing logic
          console.log("Please try again.")
        }else{
          //display a message
          console.log("You logged in.")

          console.log(this.person);

          if(this.person.isbreeder){
            this.router.navigateByUrl("/breeder");
          }
          else{
            this.router.navigateByUrl("/buyer");
          }

          

        }
        
      },
      () => {
        
      }
    )
  }

}
