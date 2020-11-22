import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportIssueComponent } from './report-issue.component';

describe('ReportIssueComponent', () => {
  let component: ReportIssueComponent;
  let fixture: ComponentFixture<ReportIssueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
