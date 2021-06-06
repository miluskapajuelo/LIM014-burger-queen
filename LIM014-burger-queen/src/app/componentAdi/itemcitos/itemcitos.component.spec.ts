import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcitosComponent } from './itemcitos.component';

describe('ItemcitosComponent', () => {
  let component: ItemcitosComponent;
  let fixture: ComponentFixture<ItemcitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemcitosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
