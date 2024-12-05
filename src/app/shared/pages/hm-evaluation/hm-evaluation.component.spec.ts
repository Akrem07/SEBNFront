import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmEvaluationComponent } from './hm-evaluation.component';

describe('HmEvaluationComponent', () => {
  let component: HmEvaluationComponent;
  let fixture: ComponentFixture<HmEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
