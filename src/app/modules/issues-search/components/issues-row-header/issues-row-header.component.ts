import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GitHubIssue } from '../../models/issues-search.models';

@Component({
  selector: 'app-issues-row-header',
  templateUrl: './issues-row-header.component.html',
  styleUrls: ['./issues-row-header.component.scss']
})
export class IssuesRowHeaderComponent implements OnInit {
  @Input() issue: GitHubIssue;
  @Input() isLiked: boolean;

  @Output() likeIssue = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    console.log('isLIKED: ', this.isLiked);
    
  }

  public computeIconType(): string {
    return this.isLiked ? 'start' : 'star_border';
  }

  public onIssueLiked(event: Event): void {
    console.log('clicked');
    
    event.preventDefault();
    event.stopPropagation();
    return this.likeIssue.emit(this.issue.id);
  }
}
