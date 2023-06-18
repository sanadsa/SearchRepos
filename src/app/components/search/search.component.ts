import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchedRepo: string;
  @Output() reposResult: EventEmitter<any> = new EventEmitter<any>();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search() {
    this.searchService.search(this.searchedRepo).subscribe(res => {
        console.log({res});
        this.reposResult.emit(res.items);
      },
      error => {
        console.error(error);
      }
    );
  }

}
