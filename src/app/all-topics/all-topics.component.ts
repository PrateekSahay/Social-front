import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../data-collection.service';

@Component({
  selector: 'app-all-topics',
  templateUrl: './all-topics.component.html',
  styleUrls: ['./all-topics.component.css']
})
export class AllTopicsComponent implements OnInit {

  topics: any;
  pageData: any;
  pageNo = 5;
  
  constructor(private topicsService: DataCollectionService ) { }

  ngOnInit() {
    this.topicsService.getTopics().subscribe(
      (data) => {
        this.topics = data;
        console.log("Topics", this.topics);
      }
    )
    this.topicsService.postTopics(this.topics).subscribe();
}
}