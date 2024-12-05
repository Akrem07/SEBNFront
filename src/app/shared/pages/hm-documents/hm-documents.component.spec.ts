import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmDocumentsComponent } from './hm-documents.component';

describe('HmDocumentsComponent', () => {
  let component: HmDocumentsComponent;
  let fixture: ComponentFixture<HmDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
