import * as fromIssuesSearchAction from '../actions/issues-search.actions';

export const REDUCER_NAME = 'issues-search-reducer';

export interface State {
  githubIssues: any[];
  likedIssues: any[];
}

export const initialState: State = {
  githubIssues: [],
  likedIssues: []
};

export function reducer(state: State = initialState, action: fromIssuesSearchAction.Actions): State {
  switch (action.type) {
    case fromIssuesSearchAction.FETCH_GITHUB_ISSUES_SUCCESS:
      return { ...state, githubIssues: action.payload };
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
