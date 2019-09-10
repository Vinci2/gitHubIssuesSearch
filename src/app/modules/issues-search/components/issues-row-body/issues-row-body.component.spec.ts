import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesRowBodyComponent } from './issues-row-body.component';

describe('IssuesRowBodyComponent', () => {
  let component: IssuesRowBodyComponent;
  let fixture: ComponentFixture<IssuesRowBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesRowBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesRowBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
