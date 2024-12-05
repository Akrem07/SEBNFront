import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarEmployeeComponent } from './side-bar-employee.component';

describe('SideBarEmployeeComponent', () => {
  let component: SideBarEmployeeComponent;
  let fixture: ComponentFixture<SideBarEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
