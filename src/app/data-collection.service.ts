import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataCollectionService {

  constructor(private http: HttpClient) { }

  getTopics()
  {
    return this.http.get("https://localhost:3000/title?type=name");
  }

  getImage()
  {
    return this.http.get("https://localhost:3000/title?type=image");
  }
}
