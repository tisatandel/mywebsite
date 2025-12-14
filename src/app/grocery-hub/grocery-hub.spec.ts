import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryHub } from './grocery-hub';

describe('GroceryHub', () => {
  let component: GroceryHub;
  let fixture: ComponentFixture<GroceryHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryHub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceryHub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
