import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person/person';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
