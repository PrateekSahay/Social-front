import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataCollectionService {

  ltopic:string="name";
  limage:string="image";

  constructor(private http: HttpClient) { }

  getTopics()
  {
   // return this.http.get("http://localhost:5000/api/values/title?type="+this.ltopic);
   return this.http.get("http://localhost:5000/api/values");
  }
/*
  getImage()
  {
    return this.http.get("http://localhost:5000/api/values/title?type="+this.limage);
  }

*/
}
