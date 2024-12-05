import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpScheduleComponent } from './ip-schedule.component';

describe('IpScheduleComponent', () => {
  let component: IpScheduleComponent;
  let fixture: ComponentFixture<IpScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
