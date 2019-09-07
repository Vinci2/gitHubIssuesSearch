import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-issues-table',
  templateUrl: './issues-table.component.html',
  styleUrls: ['./issues-table.component.scss']
})
export class IssuesTableComponent implements OnInit {
  @Input() githubIssues: any[];
  @Input() likedIssuesIds: any[];
  @Output() likeIssue = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public onIssueLiked(issueId: string): void {
    this.likeIssue.emit(issueId);
  }

  public isIssueLiked(issueId: string): boolean {
    return this.likedIssuesIds.some((likedIssueId) => {
      return likedIssueId === issueId;
    });
  }

}
