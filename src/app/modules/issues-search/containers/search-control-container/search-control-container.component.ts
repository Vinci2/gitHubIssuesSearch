import { Component, OnInit } from '@angular/core';
import { IssuesSearchStateService } from '../../services/issues-search-state.service';

@Component({
  selector: 'app-search-control-container',
  templateUrl: './search-control-container.component.html',
  styleUrls: ['./search-control-container.component.scss']
})
export class SearchControlContainerComponent implements OnInit {

  constructor(private issuesSearchStateService: IssuesSearchStateService) { }

  ngOnInit() {
  }

  public onChangeTextSearch(pattern: string) {
    this.issuesSearchStateService.fetchGitIssues(pattern);
    console.log('pattern', pattern);
  }

}
