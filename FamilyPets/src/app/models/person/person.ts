export class Person {

    public personid:number;
    public email:String;
    public firstname:String;
    public lastname:String;
    public isbreeder:boolean;
    public dob:Date;
    public phonenumber:String;
    public city:String;

    constructor(personid:number, email:String, firstname:String, lastname:String, isbreeder:boolean, dob:Date, phonenumber:String, city:String){
        this.personid = personid;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.isbreeder = isbreeder;
        this.dob = dob;
        this.phonenumber = phonenumber;
        this.city = city;
        
    }
}
