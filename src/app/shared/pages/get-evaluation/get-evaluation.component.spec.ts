import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEvaluationComponent } from './get-evaluation.component';

describe('GetEvaluationComponent', () => {
  let component: GetEvaluationComponent;
  let fixture: ComponentFixture<GetEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetEvaluationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
