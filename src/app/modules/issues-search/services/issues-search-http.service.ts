import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators/';

import { FetchGitHubIssuesRes } from '../models/issues-search.models';

@Injectable()
export class IssuesSearchHttpService {
  constructor(private httpClient: HttpClient) {}

  public fetchGithubIssues(searchPattern: string): Observable<FetchGitHubIssuesRes> {
    return this.httpClient
      .get<FetchGitHubIssuesRes>(`https://api.github.com/search/issues?q=${searchPattern}+in:title+state:open`)
      .pipe(delay(2000));
  }
}
