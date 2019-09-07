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
    default:
      return state;
  }
}
