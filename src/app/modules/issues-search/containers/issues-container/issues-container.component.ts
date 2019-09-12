import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { IssuesSearchStateService } from '../../services/issues-search-state.service';
import { GitHubIssue } from '../../models/issues-search.models';
import { IssuesInfoMsg } from './issues-container.constants';

@Component({
  selector: 'app-issues-container',
  templateUrl: './issues-container.component.html',
  styleUrls: ['./issues-container.component.scss']
})
export class IssuesContainerComponent implements OnInit, OnDestroy {
  public githubIssues$: Observable<any>;
  public likedIssues$: Observable<any>;
  public isFetchingIssues$: Observable<any>;
  public infoMsg: IssuesInfoMsg;
  public subscriptions = new Subscription();
  constructor(private issuesSearchStateService: IssuesSearchStateService) {}

  ngOnInit() {
    this.githubIssues$ = this.issuesSearchStateService.getGithubIssues();
    this.likedIssues$ = this.issuesSearchStateService.getLikedIssues();
    this.isFetchingIssues$ = this.issuesSearchStateService.getIsFetchingIssues();
    this.issuesSearchStateService.fetchLikedIssues();

    const githubIssuesSub =  this.githubIssues$.subscribe((githubIssues: GitHubIssue[]) => {
      if (!githubIssues) {
        this.infoMsg = IssuesInfoMsg.INIT;
      } else if (!githubIssues.length) {
        this.infoMsg = IssuesInfoMsg.NO_DATA;
      } else {
        this.infoMsg = null;
      }
    });

    this.subscriptions.add(githubIssuesSub);
  }

  public onIssueLiked(issueId: string) {
    this.issuesSearchStateService.toggleIssueLikeStatus(issueId);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
