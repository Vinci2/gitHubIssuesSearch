import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesSearchMainContainerComponent } from './containers/issues-search-main-container/issues-search-main-container.component';
import { SearchControlContainerComponent } from './containers/search-control-container/search-control-container.component';
import { IssuesContainerComponent } from './containers/issues-container/issues-container.component';
import { RouterModule } from '@angular/router';
import { issuesRoutes } from './issues-search.routes';
import { StoreModule } from '@ngrx/store';
import { IssuesTextSearchComponent } from './components/issues-text-search/issues-text-search.component';
import { IssuesSearchHttpService } from './services/issues-search-http.service';
import { IssuesSearchStateService } from './services/issues-search-state.service';
import { EffectsModule } from '@ngrx/effects';
import { IssuesSearchEffects } from './store/effects/issues-search.effects';
import * as fromIssuesSearchReducer from './store/reducers/issues-search.reducer';
import { IssuesTableComponent } from './components/issues-table/issues-table.component';



@NgModule({
  declarations: [IssuesSearchMainContainerComponent, SearchControlContainerComponent, IssuesContainerComponent, IssuesTextSearchComponent, IssuesTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(issuesRoutes),
    EffectsModule.forFeature([IssuesSearchEffects]),
    StoreModule.forFeature(fromIssuesSearchReducer.REDUCER_NAME, fromIssuesSearchReducer.reducer)
  ],
  providers: [IssuesSearchHttpService, IssuesSearchStateService]
})
export class IssuesSearchModule { }
