import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IssuesSearchStateService } from '../../services/issues-search-state.service';

@Component({
  selector: 'app-issues-container',
  templateUrl: './issues-container.component.html',
  styleUrls: ['./issues-container.component.scss']
})
export class IssuesContainerComponent implements OnInit {
  public githubIssues$: Observable<any>;
  public likedIssues$: Observable<any>;
  public isFetchingIssues$: Observable<any>;
  constructor(private issuesSearchStateService: IssuesSearchStateService) {}

  ngOnInit() {
    this.githubIssues$ = this.issuesSearchStateService.getGithubIssues();
    this.likedIssues$ = this.issuesSearchStateService.getLikedIssues();
    this.isFetchingIssues$ = this.issuesSearchStateService.getIsFetchingIssues();
    this.issuesSearchStateService.fetchLikedIssues();
  }

  public onIssueLiked(issueId: string) {
    console.log('issueLIKED: ', issueId);
    this.issuesSearchStateService.toggleIssueLikeStatus(issueId);
  }
}
