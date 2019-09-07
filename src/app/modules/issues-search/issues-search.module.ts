import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesSearchMainContainerComponent } from './containers/issues-search-main-container/issues-search-main-container.component';
import { SearchControlContainerComponent } from './containers/search-control-container/search-control-container.component';
import { IssuesContainerComponent } from './containers/issues-container/issues-container.component';
import { RouterModule } from '@angular/router';
import { issuesRoutes } from './issues-search.routes';
import { StoreModule } from '@ngrx/store';
import * as fromIssuesSearchReducer from './store/reducers/issues-search.reducer';
import { IssuesTextSearchComponent } from './components/issues-text-search/issues-text-search.component';



@NgModule({
  declarations: [IssuesSearchMainContainerComponent, SearchControlContainerComponent, IssuesContainerComponent, IssuesTextSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(issuesRoutes),
    StoreModule.forFeature(fromIssuesSearchReducer.REDUCER_NAME, fromIssuesSearchReducer.reducer)
  ]
})
export class IssuesSearchModule { }
