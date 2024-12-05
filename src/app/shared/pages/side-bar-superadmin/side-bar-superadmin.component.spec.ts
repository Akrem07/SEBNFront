import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarSuperadminComponent } from './side-bar-superadmin.component';

describe('SideBarSuperadminComponent', () => {
  let component: SideBarSuperadminComponent;
  let fixture: ComponentFixture<SideBarSuperadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarSuperadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarSuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
