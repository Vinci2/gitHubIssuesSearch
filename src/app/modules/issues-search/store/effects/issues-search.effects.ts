import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, tap, withLatestFrom, pluck } from 'rxjs/operators';

import { LocalStorageKeys } from 'src/app/constants/local-storage-keys.constants';
import { LocalStorageAccessService } from 'src/app/services/local-storage-access.service';
import { IssuesSearchHttpService } from '../../services/issues-search-http.service';
import { IssuesSearchStateService } from '../../services/issues-search-state.service';
import * as fromIssuesSearchActions from '../actions/issues-search.actions';

@Injectable()
export class IssuesSearchEffects {
  constructor(
    private actions$: Actions,
    private issuesSearchHttpService: IssuesSearchHttpService,
    private issuesSearchStateService: IssuesSearchStateService,
    private localStorageAccessService: LocalStorageAccessService
  ) {}

  @Effect()
  fetchIssues$: Observable<Action> = this.actions$.pipe(
    ofType(fromIssuesSearchActions.FETCH_GITHUB_ISSUES_START),
    switchMap((action: any) => {
      return this.issuesSearchHttpService.fetchGithubIssues(action).pipe(
        switchMap((data: any) => {
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
      this.localStorageAccessService.saveArray(LocalStorageKeys.LIKED_ISSUE, likedIds);
    })
  );

  @Effect()
  fetchLikedIssues$: Observable<Action> = this.actions$.pipe(
    ofType(fromIssuesSearchActions.FETCH_LIKED_ISSUES_START),
    switchMap(() => {
      const likedIssuesIds = this.localStorageAccessService.getItem(LocalStorageKeys.LIKED_ISSUE);
      return of(new fromIssuesSearchActions.FetchLikedIssuesSuccessAction(likedIssuesIds));
    })
  );
}
