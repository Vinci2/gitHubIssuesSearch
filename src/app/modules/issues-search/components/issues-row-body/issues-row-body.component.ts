import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { GitHubIssue } from '../../models/issues-search.models';

@Component({
  selector: 'app-issues-row-body',
  templateUrl: './issues-row-body.component.html',
  styleUrls: ['./issues-row-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssuesRowBodyComponent {
  @Input() issue: GitHubIssue;
}
