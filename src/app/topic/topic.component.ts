import { Component, OnInit } from '@angular/core';
import { AllTopicsComponent } from '../all-topics/all-topics.component';
import { DataCollectionService } from '../data-collection.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topics: any;

  constructor(public AllTopics: AllTopicsComponent) { }

  ngOnInit() {
    
  }

}
