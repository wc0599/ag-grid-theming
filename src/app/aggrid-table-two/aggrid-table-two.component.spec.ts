import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggridTableTwoComponent } from './aggrid-table-two.component';

describe('AggridTableTwoComponent', () => {
  let component: AggridTableTwoComponent;
  let fixture: ComponentFixture<AggridTableTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggridTableTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggridTableTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
