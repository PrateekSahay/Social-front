import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../data-collection.service';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-all-topics',
  templateUrl: './all-topics.component.html',
  styleUrls: ['./all-topics.component.css']
})
export class AllTopicsComponent implements OnInit {

  topics: any;
  

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


  }

// MatPaginator Inputs
/*
length = 100;
pageSize = 5;
pageSizeOptions: number[] = [5, 10, 25, 100];

// MatPaginator Output
pageEvent: PageEvent;

setPageSizeOptions(setPageSizeOptionsInput: string) {
  this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
}
*/
}
