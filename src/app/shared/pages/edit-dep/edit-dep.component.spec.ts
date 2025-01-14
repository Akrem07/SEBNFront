import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepComponent } from './edit-dep.component';

describe('EditDepComponent', () => {
  let component: EditDepComponent;
  let fixture: ComponentFixture<EditDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
