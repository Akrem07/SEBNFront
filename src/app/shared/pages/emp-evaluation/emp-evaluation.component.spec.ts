import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpEvaluationComponent } from './emp-evaluation.component';

describe('EmpEvaluationComponent', () => {
  let component: EmpEvaluationComponent;
  let fixture: ComponentFixture<EmpEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
