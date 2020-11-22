import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LastUsesComponent } from './last-uses.component';

describe('LastUsesComponent', () => {
  let component: LastUsesComponent;
  let fixture: ComponentFixture<LastUsesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LastUsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
