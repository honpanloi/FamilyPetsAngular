import { Person } from "../person/person";

export class Request{
    requestid:number;
    animal:string;
    breed:string;
    dateaccepted:Date;
    dateissued:Date;
    photolink:string;
    requeststatus:string;
    breederid:Person;
    buyerid:Person;
 
    constructor(requestid:number, animal:string, breed:string, dateaccepted:Date, dateissued:Date,photolink:string,
        requeststatus:string, breederid:Person, buyerid:Person){
            
    this.requestid=requestid;
    this.animal=animal;
    this.breed=breed;
    this.dateaccepted=dateaccepted;
    this.dateissued=dateissued;
    this.photolink=photolink;
    this.requeststatus=requeststatus;
    this.breederid=breederid;
    this.buyerid=breederid;
        }

}