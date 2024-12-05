import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header-nav-dashboard',
  templateUrl: './header-nav-dashboard.component.html',
  styleUrl: './header-nav-dashboard.component.css'
})
export class HeaderNavDashboardComponent {
  constructor(private authService: AuthService) { }

  logout() {
    this.authService.signOut();
  }

}
