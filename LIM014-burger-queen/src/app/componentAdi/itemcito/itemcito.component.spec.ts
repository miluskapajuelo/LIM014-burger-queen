import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcitoComponent } from './itemcito.component';

describe('ItemcitoComponent', () => {
  let component: ItemcitoComponent;
  let fixture: ComponentFixture<ItemcitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemcitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
