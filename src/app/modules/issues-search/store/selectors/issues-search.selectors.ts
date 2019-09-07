import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSearchIssuesReducer from '../reducers/issues-search.reducer';

export const getIssuesSearchState = createFeatureSelector(fromSearchIssuesReducer.REDUCER_NAME);

export const getGithubIssues = createSelector(getIssuesSearchState, (state: fromSearchIssuesReducer.State): any => {
    return state.githubIssues;
});

export const getLikedIssues = createSelector(getIssuesSearchState, (state: fromSearchIssuesReducer.State): any => {
    return state.likedIssues;
});
