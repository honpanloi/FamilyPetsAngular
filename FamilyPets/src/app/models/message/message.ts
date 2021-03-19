import { Person } from "../person/person";
import { Request } from "../request/request"

export class Message {
    messageid:number;
    content:string;
    requestid:Request;
    senderid:Person;

    constructor(messageid:number,
        content:string,
        requestid:Request,
        senderid:Person)
    {
        this.senderid=senderid;
        this.content=content;
        this.messageid=messageid;
        this.requestid=requestid;
    }
}