import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExcelViewComponent } from './user-excel-view.component';

describe('UserExcelViewComponent', () => {
  let component: UserExcelViewComponent;
  let fixture: ComponentFixture<UserExcelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserExcelViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserExcelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
