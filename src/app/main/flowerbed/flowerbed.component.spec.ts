import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerbedComponent } from './flowerbed.component';

describe('FlowerbedComponent', () => {
  let component: FlowerbedComponent;
  let fixture: ComponentFixture<FlowerbedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerbedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
