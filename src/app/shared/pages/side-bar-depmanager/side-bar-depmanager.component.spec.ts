import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDepmanagerComponent } from './side-bar-depmanager.component';

describe('SideBarDepmanagerComponent', () => {
  let component: SideBarDepmanagerComponent;
  let fixture: ComponentFixture<SideBarDepmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarDepmanagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarDepmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
