import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesSearchMainContainerComponent } from './issues-search-main-container.component';

describe('IssuesSearchMainContainerComponent', () => {
  let component: IssuesSearchMainContainerComponent;
  let fixture: ComponentFixture<IssuesSearchMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesSearchMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesSearchMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
