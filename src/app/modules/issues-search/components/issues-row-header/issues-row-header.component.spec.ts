import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesRowHeaderComponent } from './issues-row-header.component';

describe('IssuesRowHeaderComponent', () => {
  let component: IssuesRowHeaderComponent;
  let fixture: ComponentFixture<IssuesRowHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuesRowHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesRowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
