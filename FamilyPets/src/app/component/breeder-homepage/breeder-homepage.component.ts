import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breeder-homepage',
  templateUrl: './breeder-homepage.component.html',
  styleUrls: ['./breeder-homepage.component.css']
})
export class BreederHomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
  moveToAnotherPage(value : string){
    this.router.navigate([value], {skipLocationChange: true});
  }

}
