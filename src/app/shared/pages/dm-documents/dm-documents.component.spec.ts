import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmDocumentsComponent } from './dm-documents.component';

describe('DmDocumentsComponent', () => {
  let component: DmDocumentsComponent;
  let fixture: ComponentFixture<DmDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DmDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
