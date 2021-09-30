import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemMobileComponent } from './list-item-mobile.component';

describe('ListItemMobileComponent', () => {
  let component: ListItemMobileComponent;
  let fixture: ComponentFixture<ListItemMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
