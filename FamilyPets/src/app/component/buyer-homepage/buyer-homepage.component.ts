import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-homepage',
  templateUrl: './buyer-homepage.component.html',
  styleUrls: ['./buyer-homepage.component.css']
})
export class BuyerHomepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  

  moveToAnotherPage(value : string){
    this.router.navigate([value], {skipLocationChange: true});
  }

}
