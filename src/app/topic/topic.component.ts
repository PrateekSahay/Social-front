import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataCollectionService } from '../data-collection.service';
import { forEach } from '@angular/router/src/utils/collection';
import { element } from 'protractor';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topics: any;
  posts: any;
  name: any;
  topicposts: any;

  constructor(
    private topicsService: DataCollectionService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.topicsService.getTopics().subscribe(
      (data) => {
        this.topics = data;
        console.log()
        console.log("Topics", this.topics);
      }
    )

    this.topicsService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        console.log("Posts", this.posts);
        this.getTopicPosts();
      })

    this.route.paramMap.subscribe(params => { this.name = params.get("id") })
    console.log(this.name);
  }

  getTopicPosts() {
    console.log("AAAAAZZAA");
    console.log(this.posts);
    for (let x of this.topics) {
      for (let a of this.posts) {
        console.log(a.topicForeignKey);
        if (x.topic_id == a.topicForeignKey){
          this.topicsService.getPosts().subscribe(
            (data) => {
              this.topicposts = data;
              console.log("Posts", this.topicposts);
        })
      }
      console.log(x.topic_id);
    }
  }
}
}
