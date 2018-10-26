import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../data-collection.service'

@Component({
  selector: 'app-all-topics',
  templateUrl: './all-topics.component.html',
  styleUrls: ['./all-topics.component.css']
})
export class AllTopicsComponent implements OnInit {

  topics: any;
  images: any;
  // alltopics: Array<any>;
  // allimages: Array<any>;

  constructor(private topicsService: DataCollectionService ) { }

  ngOnInit() {
    this.topicsService.getTopics().subscribe(
      (data) => {
        this.topics = data;
        console.log("Topics", this.topics);
        // this.alltopics = this.topics.results.map(image address)
        // console.log(this.alltopics);

      }
    )

    
    this.topicsService.getImage().subscribe(
      (data) => {
        this.images = data;
        console.log("Images", this.images);
        // this.alltopics = this.topics.results.map(image address)
        // console.log(this.alltopics);
      }
    )
    
  }

}
