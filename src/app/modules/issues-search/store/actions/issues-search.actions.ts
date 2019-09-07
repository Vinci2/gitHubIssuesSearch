import { Action } from '@ngrx/store';

export const FETCH_GITHUB_ISSUES_START = '[Issues Search] fetch github issues start';
export const FETCH_GITHUB_ISSUES_SUCCESS = '[Issues Search] fetch github issues success';
export const FETCH_GITHUB_ISSUES_FAIL = '[Issues Search] fetch github issues fail';
export const TOGGLE_LIKED_ISSUE_STATE = '[Issues Search] toggle liked issue state';

export class FetchGithubIssuesStartAction implements Action {
  public readonly type = FETCH_GITHUB_ISSUES_START;
  constructor(public payload: any) {}
}

export class FetchGithubIssuesSuccessAction implements Action {
  public readonly type = FETCH_GITHUB_ISSUES_SUCCESS;
  constructor(public payload: any) {}
}

export class FetchGithubIssuesFailAction implements Action {
  public readonly type = FETCH_GITHUB_ISSUES_FAIL;
}

export class ToggleLikedIssueState implements Action {
  public readonly type = TOGGLE_LIKED_ISSUE_STATE;
  constructor(public payload: string) {}
}

export type Actions =
  | FetchGithubIssuesStartAction
  | FetchGithubIssuesSuccessAction
  | FetchGithubIssuesFailAction
  | ToggleLikedIssueState;
