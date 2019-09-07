import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchControlContainerComponent } from './search-control-container.component';

describe('SearchControlContainerComponent', () => {
  let component: SearchControlContainerComponent;
  let fixture: ComponentFixture<SearchControlContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchControlContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchControlContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
