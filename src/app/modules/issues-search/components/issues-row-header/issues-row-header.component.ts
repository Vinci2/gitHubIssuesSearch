import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { GitHubIssue } from '../../models/issues-search.models';
import { LikeStateIcons } from './issues-row-header.constants';

@Component({
  selector: 'app-issues-row-header',
  templateUrl: './issues-row-header.component.html',
  styleUrls: ['./issues-row-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssuesRowHeaderComponent {
  @Input() issue: GitHubIssue;
  @Input() isLiked: boolean;

  @Output() likeIssue = new EventEmitter<string>();

  public computeIconType(): string {
    return this.isLiked ? LikeStateIcons.LIKED : LikeStateIcons.NOT_LIKED;
  }

  public onIssueLiked(event: Event): void {
    event.stopPropagation();
    return this.likeIssue.emit(this.issue.id);
  }

  public onTitleClicked(event: Event): void {
    event.stopPropagation();
  }
}
