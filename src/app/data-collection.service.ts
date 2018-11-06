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
    return this.http.get("http://172.23.238.164:8080/api/quizrt/template");
  }

  postTopics(topics){
    return this.http.post("http://localhost:5000",topics);
  }

}
