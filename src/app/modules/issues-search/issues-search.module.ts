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

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { IssuesRowHeaderComponent } from './components/issues-row-header/issues-row-header.component';
import { IssuesRowBodyComponent } from './components/issues-row-body/issues-row-body.component';
import {MatCardModule} from '@angular/material/card';
import { OverlayLoaderComponent } from './components/overlay-loader/overlay-loader.component';


@NgModule({
  declarations: [
    IssuesSearchMainContainerComponent,
    SearchControlContainerComponent,
    IssuesContainerComponent,
    IssuesTextSearchComponent,
    IssuesTableComponent,
    IssuesRowHeaderComponent,
    IssuesRowBodyComponent,
    OverlayLoaderComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(issuesRoutes),
    EffectsModule.forFeature([IssuesSearchEffects]),
    StoreModule.forFeature(fromIssuesSearchReducer.REDUCER_NAME, fromIssuesSearchReducer.reducer)
  ],
  providers: [IssuesSearchHttpService, IssuesSearchStateService]
})
export class IssuesSearchModule {}
