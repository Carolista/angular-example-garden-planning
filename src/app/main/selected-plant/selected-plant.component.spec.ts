import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPlantComponent } from './selected-plant.component';

describe('SelectedPlantComponent', () => {
  let component: SelectedPlantComponent;
  let fixture: ComponentFixture<SelectedPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
