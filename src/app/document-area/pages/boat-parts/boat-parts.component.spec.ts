import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BoatPartsComponent } from './boat-parts.component';

describe('BoatPartsComponent', () => {
  let component: BoatPartsComponent;
  let fixture: ComponentFixture<BoatPartsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
