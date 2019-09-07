import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators/';

@Injectable()
export class IssuesSearchHttpService {
  private fakeData = of([
    { id: '1', name: 'name1', desc: 'desc1', author: 'author1' },
    { id: '2', name: 'name2', desc: 'desc2', author: 'author2' },
    { id: '3', name: 'name3', desc: 'desc3', author: 'author3' },
    { id: '4', name: 'name4', desc: 'desc4', author: 'author4' },
    { id: '5', name: 'name5', desc: 'desc5', author: 'author5' },
    { id: '6', name: 'name6', desc: 'desc6', author: 'author6' }
  ]);

  constructor(private httpClient: HttpClient) {}

  public fetchGithubIssues(data: any) {
    return this.fakeData.pipe(delay(3000));
  }
}
