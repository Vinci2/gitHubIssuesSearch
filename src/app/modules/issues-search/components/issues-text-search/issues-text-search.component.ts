import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  filter
} from 'rxjs/operators';

@Component({
  selector: 'app-issues-text-search',
  templateUrl: './issues-text-search.component.html',
  styleUrls: ['./issues-text-search.component.scss']
})
export class IssuesTextSearchComponent implements OnInit {
  @Output() changeTextSearch = new EventEmitter<string>();

  private DEBOUNCE_TIME = 1000;
  private SEARCH_PATTERN_MIN_LENGTH = 2;
  private emitFilter = new Subject<string>();

  constructor() {}

  ngOnInit() {
    this.emitFilter
      .pipe(
        debounceTime(this.DEBOUNCE_TIME),
        map((pattern: string) => {
          return pattern.trim();
        }),
        filter((pattern: string) => {
          return pattern && pattern.length >= this.SEARCH_PATTERN_MIN_LENGTH;
        }),
        distinctUntilChanged()
      )
      .subscribe((finalData: string) => {
        this.changeTextSearch.emit(finalData);
      });
  }

  public onTextSearchChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.emitFilter.next(inputElement.value);
  }
}
