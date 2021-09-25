import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksForSigningUpComponent } from './thanks-for-signing-up.component';

describe('ThanksForSigningUpComponent', () => {
  let component: ThanksForSigningUpComponent;
  let fixture: ComponentFixture<ThanksForSigningUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksForSigningUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksForSigningUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
