import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridTableThreeComponent } from './aggrid-table-three.component';

describe('AggridTableThreeComponent', () => {
  let component: AggridTableThreeComponent;
  let fixture: ComponentFixture<AggridTableThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridTableThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggridTableThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
