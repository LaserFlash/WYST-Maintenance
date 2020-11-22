import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportUsageComponent } from './report-usage.component';

describe('ReportUsageComponent', () => {
  let component: ReportUsageComponent;
  let fixture: ComponentFixture<ReportUsageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
