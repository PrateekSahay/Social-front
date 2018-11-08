import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"; 
import { DataCollectionService } from '../data-collection.service';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topics: any;
  posts: any;
  name: any;

  constructor(
    private topicsService: DataCollectionService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.topicsService.getTopics().subscribe(
      (data) => {
        this.topics = data;
        console.log("Topics", this.topics);
      }
    )

    this.topicsService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        console.log("Posts", this.posts);
      }
    )

    this.route.paramMap.subscribe(params => {this.name = params.get("id")})

    console.log(this.name);
    
  }

}
