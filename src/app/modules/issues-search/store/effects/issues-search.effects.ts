import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of, combineLatest } from 'rxjs';
import { switchMap, catchError, tap, withLatestFrom, pluck } from 'rxjs/operators';

import { IssuesSearchHttpService } from '../../services/issues-search-http.service';
import * as fromIssuesSearchActions from '../actions/issues-search.actions';
import { Injectable } from '@angular/core';
import { IssuesSearchStateService } from '../../services/issues-search-state.service';

@Injectable()
export class IssuesSearchEffects {
  constructor(
    private actions$: Actions,
    private issuesSearchHttpService: IssuesSearchHttpService,
    private issuesSearchStateService: IssuesSearchStateService
  ) {}

  @Effect()
  fetchIssues$: Observable<Action> = this.actions$.pipe(
    ofType(fromIssuesSearchActions.FETCH_GITHUB_ISSUES_START),
    switchMap((action: any) => {
      console.log('test1');

      return this.issuesSearchHttpService.fetchGithubIssues(action).pipe(
        switchMap((data: any) => {
          console.log('test1');
          return of(new fromIssuesSearchActions.FetchGithubIssuesSuccessAction(data));
        }),
        catchError(() => {
          return of(new fromIssuesSearchActions.FetchGithubIssuesFailAction());
        })
      );
    })
  );

  @Effect({ dispatch: false })
  storeLikedIssues$: Observable<any> = this.actions$.pipe(
    ofType(fromIssuesSearchActions.TOGGLE_LIKED_ISSUE_STATE),
    withLatestFrom(this.issuesSearchStateService.getLikedIssues()),
    pluck(1),
    tap((likedIds: any[]) => {
      console.log('DATA: ', likedIds);
    })
  );
}
