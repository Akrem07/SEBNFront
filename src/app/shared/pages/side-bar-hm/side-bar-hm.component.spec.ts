import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarHmComponent } from './side-bar-hm.component';

describe('SideBarHmComponent', () => {
  let component: SideBarHmComponent;
  let fixture: ComponentFixture<SideBarHmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarHmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarHmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
