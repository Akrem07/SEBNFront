import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcelUploadComponent } from './admin-excel-upload.component';

describe('AdminExcelUploadComponent', () => {
  let component: AdminExcelUploadComponent;
  let fixture: ComponentFixture<AdminExcelUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminExcelUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminExcelUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
