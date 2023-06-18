import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss']
})
export class RepoItemComponent implements OnInit {
  @Input() repository: any;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.repository);
  }

  bookmark() {

  }
}
