import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalereyComponent } from './galerey.component';

describe('GalereyComponent', () => {
  let component: GalereyComponent;
  let fixture: ComponentFixture<GalereyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalereyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalereyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
