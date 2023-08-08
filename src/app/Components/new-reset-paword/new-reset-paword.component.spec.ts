import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResetPawordComponent } from './new-reset-paword.component';

describe('NewResetPawordComponent', () => {
  let component: NewResetPawordComponent;
  let fixture: ComponentFixture<NewResetPawordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewResetPawordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewResetPawordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
