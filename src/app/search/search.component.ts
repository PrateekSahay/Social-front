import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../data-collection.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  SearchResult: any;
  Title: string;
  display : string;

  constructor(
    private route: ActivatedRoute,
    private SearchService: DataCollectionService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      this.Title = data['q'];
      console.log(this.Title);
    })

    this.SearchService.getTopics().subscribe(
      (data) => {
        this.SearchResult = data;
        console.log("SearchResult", this.SearchResult);
      }
    )
    this.getSearchResult();
  }

  getSearchResult() {
    this.SearchService.getTopics().subscribe(
      (data) => {
        this.SearchResult = data;
        console.log("SearchResult", this.SearchResult);
        for (let item of this.SearchResult) {
          console.log(item.topic_name);
          if(this.Title == item.topic_name){
            //console.log(item.topic_name);
            this.display=item.topic_name;
          }
        }
      })
  }
}
