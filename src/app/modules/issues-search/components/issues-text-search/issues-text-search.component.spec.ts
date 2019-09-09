import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesTextSearchComponent } from './issues-text-search.component';

describe('IssuesTextSearchComponent', () => {
  let component: IssuesTextSearchComponent;
  let fixture: ComponentFixture<IssuesTextSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesTextSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesTextSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
