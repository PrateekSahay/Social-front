import { Component, OnInit } from '@angular/core';
import { AllTopicsComponent } from '../all-topics/all-topics.component';
import { DataCollectionService } from '../data-collection.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  posts: any;

  constructor(
    private topicsService: DataCollectionService,
    public AllTopics: AllTopicsComponent) { }

  ngOnInit() {
    this.topicsService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        console.log("Posts", this.posts);
      }
    )
    
  }

}
