import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { GitHubIssue } from '../../models/issues-search.models';

@Component({
  selector: 'app-issues-table',
  templateUrl: './issues-table.component.html',
  styleUrls: ['./issues-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssuesTableComponent {
  @Input() githubIssues: GitHubIssue[];
  @Input() likedIssuesIds: any[];
  @Output() likeIssue = new EventEmitter<string>();

  public onIssueLiked(issueId: string): void {
    this.likeIssue.emit(issueId);
  }

  public isIssueLiked(issueId: string): boolean {
    return this.likedIssuesIds.some(likedIssueId => {
      return likedIssueId === issueId;
    });
  }

  public prevent(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
