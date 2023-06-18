import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  repos: any[] = [];

  constructor(private http: HttpClient) { }

  search(searchValue: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/search/repositories?q=${searchValue}`)
  }

  getRepos(): any[] {
    return this.repos;
  }

  setRepos(repos: any[]): void {
    this.repos = repos;
  }
}
