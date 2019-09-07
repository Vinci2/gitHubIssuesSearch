import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromIssuesSearchSelectors from '../store/selectors/issues-search.selectors';
import * as formIssuesSearchReducer from '../store/reducers/issues-search.reducer';
import * as fromIssuesSearchActions from '../store/actions/issues-search.actions';

@Injectable()
export class IssuesSearchStateService {
  private getGithubIssues$ = this.store.select(fromIssuesSearchSelectors.getGithubIssues);
  private getLikedIssues$ = this.store.select(fromIssuesSearchSelectors.getLikedIssues);

  constructor(private store: Store<formIssuesSearchReducer.State>) {}

  public fetchGitIssues(data: any): void {
    this.store.dispatch(new fromIssuesSearchActions.FetchGithubIssuesStartAction(data));
  }

  public getGithubIssues(): any {
    return this.getGithubIssues$;
  }

  public getLikedIssues(): any {
    return this.getLikedIssues$;
  }

  public toggleIssueLikeStatus(issueId): void {
    this.store.dispatch(new fromIssuesSearchActions.ToggleLikedIssueState(issueId));
  }

  public fetchLikedIssues(): void {
    this.store.dispatch(new fromIssuesSearchActions.FetchLikedIssuesStartAction());
  }
}
