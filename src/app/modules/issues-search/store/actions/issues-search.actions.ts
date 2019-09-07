import { Action } from '@ngrx/store';

export const FETCH_GITHUB_ISSUES_START = '[Issues Search] fetch github issues start';
export const FETCH_GITHUB_ISSUES_SUCCESS = '[Issues Search] fetch github issues success';
export const FETCH_GITHUB_ISSUES_FAIL = '[Issues Search] fetch github issues fail';


export class FetchGithubIssuesStartAction implements Action {
    public readonly type = FETCH_GITHUB_ISSUES_START;
    constructor(public paylaod: any) {}
}

export class FetchGithubIssuesSuccessAction implements Action {
    public readonly type = FETCH_GITHUB_ISSUES_SUCCESS;

    constructor(public payload: any) {}
}

export type Actions = FetchGithubIssuesStartAction | FetchGithubIssuesSuccessAction;
