import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPCodeComponent } from './otpcode.component';

describe('OTPCodeComponent', () => {
  let component: OTPCodeComponent;
  let fixture: ComponentFixture<OTPCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OTPCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OTPCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
