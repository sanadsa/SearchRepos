import { Component, OnInit } from '@angular/core';
import { Repositories } from 'src/app/model/repository';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  searchedRepos: Repositories;

  constructor() { }

  ngOnInit(): void {

  }

  onRepoItemSelected(repos: any) {
    console.log('onRepoItemSelected');
    console.log(repos);

    this.searchedRepos = repos;
  }

}
