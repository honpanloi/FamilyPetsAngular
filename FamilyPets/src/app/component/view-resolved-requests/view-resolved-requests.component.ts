import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person/person';
import { RequestService } from 'src/app/services/request/request.service';
import { Request } from 'src/app/models/request/request';
import { CookieService } from 'ngx-cookie-service';
import { UploadFileService } from 'src/app/services/login/uploadfile/upload-file.service';

@Component({
  selector: 'app-view-resolved-requests',
  templateUrl: './view-resolved-requests.component.html',
  styleUrls: ['./view-resolved-requests.component.css']
})
export class ViewResolvedRequestsComponent implements OnInit {

  constructor(private requestService: RequestService, 
    private router: Router, 
    private cookieService:CookieService,
    private uploadFileService:UploadFileService
    ) { }



  
  ngOnInit(): void {
    this.viewResolved();
    this.loggedInPerson=JSON.parse(this.cookieService.get("person"))
    
  }

  moveToAnotherPage(value : string){
    this.router.navigate([value], {skipLocationChange: true});
  }

  loggedInPerson:Person = new Person(0,"","","",true,new Date(),"","")
  person:Person = new Person(0,"","","",true,new Date(),"","")
  request:Request = new Request(0,"","", new Date(), new Date(), "", "", this.person, this.person)
  request2:Request = new Request(0,"","", new Date(), new Date(), "", "", this.person, this.person)
  requests:Request[]=[];


  viewResolved(){
    this.requestService.viewAccepted().subscribe(
    (data) => {this.requests=data},
    () => {console.log("Please try again.")}
    )}

    displayChat:boolean =false;

    viewChat(r:Request){
      this.cookieService.set("chatId",r.requestid.toString())
      this.displayChat= !this.displayChat;
      //console.log(this.cookieService.get("chatId"))
    }

    fileInput:FileList = new FileList();
    file:any;
    //document.getElementById("fileInput")
    
    change(fileInput: FileList){
      this.file = fileInput.item(0);
      console.log(this.file.name)
    }

    upload(r:Request){
      
      // this.fileInput = document.getElementById(r.requestid.toString());

      
      
        
        // this.uploadFileService.upload(file).subscribe(
        // (data) => {
        //   console.log("File Uploaded!!")
        // },
        // () => {
        //   console.log("Error uploading.")
        // }
      // )
      
         
    }

}
