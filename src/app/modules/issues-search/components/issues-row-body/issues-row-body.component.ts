import { Component, OnInit, Input } from '@angular/core';
import { GitHubIssue } from '../../models/issues-search.models';

@Component({
  selector: 'app-issues-row-body',
  templateUrl: './issues-row-body.component.html',
  styleUrls: ['./issues-row-body.component.scss']
})
export class IssuesRowBodyComponent implements OnInit {
  @Input() issue: GitHubIssue;

  constructor() { }

  ngOnInit() {
  }

}
