import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message/message';
import { Person } from 'src/app/models/person/person';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient:HttpClient) { }

  getMessageByRequestId(requestid:number):Observable<Message[]>{

    return this.httpClient.get('http://3.141.97.16:8080/messages/view/'+requestid) as Observable <Message[]>;
  }

  sendMessage(content:string, sender:Person, requestid:number):Observable<any>{
    return this.httpClient.post('http://localhost:8080/messages/create/'+requestid+"/"+sender.personid+"/"+content, "")
  }
}
