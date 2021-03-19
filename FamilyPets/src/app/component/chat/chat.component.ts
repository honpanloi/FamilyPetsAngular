import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Message } from 'src/app/models/message/message';
import { Person } from 'src/app/models/person/person';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private messageService: MessageService, private cookieService:CookieService) { }

  ngOnInit(): void {
    this.displayChat();
  }

  messages:Message[] = [];

  requestid:number = 0;

  refreshChat(){
    this.requestid = parseInt(this.cookieService.get("chatId"))
    this.messageService.getMessageByRequestId(this.requestid).subscribe(
      (data) => {
        this.messages = data;
        console.log(this.messages);
      },
      () =>{
        console.log("Can't see messages.")
      }
    )
  }

  displayChat(){
    this.requestid = parseInt(this.cookieService.get("chatId"))
    this.messageService.getMessageByRequestId(this.requestid).subscribe(
      (data) => {
        this.messages = data;
        console.log(this.messages);
        // this.displayChat()
      },
      () =>{
        console.log("Can't see messages.")
      }
    )
  }

  content:string = "";
  person:Person = JSON.parse(this.cookieService.get("person"))
  sendMessage(){
    //this.requestid = parseInt(this.cookieService.get("chatId"))
    if(this.content){
      console.log(this.requestid)
      this.messageService.sendMessage(this.content, this.person, this.requestid).subscribe(
        (data) => {
          console.log("message sent")
          this.content = "";
          this.displayChat();
        },
        () => {
          console.log("message not sent")
        }
      )
    }

  }
}
