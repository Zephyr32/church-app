import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseChurchComponent } from './house-church.component';

describe('HouseChurchComponent', () => {
  let component: HouseChurchComponent;
  let fixture: ComponentFixture<HouseChurchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseChurchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseChurchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
