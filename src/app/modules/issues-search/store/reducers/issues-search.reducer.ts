import { format } from 'date-fns';

import * as fromIssuesSearchAction from '../actions/issues-search.actions';
import { GitHubIssue, IssueAuthor } from '../../models/issues-search.models';


export const REDUCER_NAME = 'issues-search-reducer';

export interface State {
  githubIssues: GitHubIssue[];
  isFetchingIssues: boolean;
  likedIssues: any[];
}

export const initialState: State = {
  githubIssues: null,
  isFetchingIssues: false,
  likedIssues: []
};

const DATE_FORMA = 'yyyy-MM-dd';

export function reducer(state: State = initialState, action: fromIssuesSearchAction.Actions): State {
  switch (action.type) {
    case fromIssuesSearchAction.FETCH_GITHUB_ISSUES_START:
      return { ...state, isFetchingIssues: true };
    case fromIssuesSearchAction.FETCH_GITHUB_ISSUES_SUCCESS:
      return {
        ...state,
        isFetchingIssues: false,
        githubIssues: action.payload.map((issue: GitHubIssue) => {
          return computeIssueModel(issue);
        })
      };
    case fromIssuesSearchAction.FETCH_LIKED_ISSUES_SUCCESS:
      return { ...state, likedIssues: action.payload || [] };
    case fromIssuesSearchAction.TOGGLE_LIKED_ISSUE_STATE:
      const likedIssueId = action.payload;
      let filteredFlag = false;
      const newLikedIssues = state.likedIssues.filter(issueId => {
        if (issueId === likedIssueId) {
          filteredFlag = true;
          return false;
        } else {
          return true;
        }
      });
      if (!filteredFlag) {
        newLikedIssues.push(likedIssueId);
      }
      return {
        ...state,
        likedIssues: newLikedIssues
      };
    default:
      return state;
  }
}

function computeIssueModel(issues: GitHubIssue): GitHubIssue {
  const authorData: IssueAuthor = {
    avatar_url: issues.user.avatar_url,
    login: issues.user.login,
    url: issues.user.url,
    html_url: issues.user.html_url
  };

  return {
    body: issues.body,
    title: issues.title,
    id: issues.id + '',
    html_url: issues.html_url,
    user: authorData,
    created_at: format(new Date(issues.created_at), DATE_FORMA)
  };
}
