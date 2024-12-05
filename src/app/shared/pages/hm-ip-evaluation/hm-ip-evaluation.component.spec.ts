import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmIpEvaluationComponent } from './hm-ip-evaluation.component';

describe('HmIpEvaluationComponent', () => {
  let component: HmIpEvaluationComponent;
  let fixture: ComponentFixture<HmIpEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmIpEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmIpEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
