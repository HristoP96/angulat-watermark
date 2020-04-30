import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialChartSampleComponent } from './financial-chart-sample.component';

describe('FinancialChartSampleComponent', () => {
  let component: FinancialChartSampleComponent;
  let fixture: ComponentFixture<FinancialChartSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialChartSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialChartSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
