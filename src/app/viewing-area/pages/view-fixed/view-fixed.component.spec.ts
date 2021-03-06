import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewFixedComponent } from './view-fixed.component';

describe('ViewFixedComponent', () => {
  let component: ViewFixedComponent;
  let fixture: ComponentFixture<ViewFixedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
