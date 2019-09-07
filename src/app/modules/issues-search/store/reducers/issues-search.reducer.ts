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
        default:
            return state;
    }
}
