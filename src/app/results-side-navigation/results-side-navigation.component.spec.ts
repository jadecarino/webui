import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsSideNavigationComponent } from './results-side-navigation.component';

describe('ResultsSideNavigationComponent', () => {
  let component: ResultsSideNavigationComponent;
  let fixture: ComponentFixture<ResultsSideNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsSideNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsSideNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
