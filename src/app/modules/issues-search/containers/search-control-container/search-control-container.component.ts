import { Component } from '@angular/core';

import { IssuesSearchStateService } from '../../services/issues-search-state.service';

@Component({
  selector: 'app-search-control-container',
  templateUrl: './search-control-container.component.html',
  styleUrls: ['./search-control-container.component.scss']
})
export class SearchControlContainerComponent {
  constructor(private issuesSearchStateService: IssuesSearchStateService) {}

  public onChangeTextSearch(pattern: string) {
    this.issuesSearchStateService.fetchGitIssues(pattern);
  }
}
