import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private https: HttpClient) { }

  upload(file: File): Observable<HttpEvent<{}>> {    
    const data: FormData = new FormData();    
    data.append('file', file);
    const newRequest = new HttpRequest('POST', 'http://localhost:8080/image/upload', data, {
    });    
    return this.https.request(newRequest);
  }



}
