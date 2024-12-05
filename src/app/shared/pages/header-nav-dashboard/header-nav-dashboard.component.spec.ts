import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavDashboardComponent } from './header-nav-dashboard.component';

describe('HeaderNavDashboardComponent', () => {
  let component: HeaderNavDashboardComponent;
  let fixture: ComponentFixture<HeaderNavDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNavDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNavDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
