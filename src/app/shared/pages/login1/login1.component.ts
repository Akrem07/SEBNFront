import { Component } from '@angular/core';
import { UserLoginModel } from '../../../model/login.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class Login1Component {
  constructor(private authService: AuthService, private router: Router) { }

  user: UserLoginModel = { mat: 0 , password: '' };
  FailedLogin: string | null = null;

  
  login() {
  this.authService.signIn(this.user.mat,this.user.password).subscribe(
    response => {
      if (response && response.token) {
        localStorage.setItem('authtoken', response.token);
        this.router.navigate(['/employee']);
      }
    },
    error => {
      console.log('Error Response:', error); // Output the entire error response

      if (error && error.error && typeof error.error.message === 'string') {
        if (error.error.message.includes('Password')) {
          this.FailedLogin = 'Incorrect password.';
        } else if (error.error.message.includes('User')) {
          this.FailedLogin = 'User not found.';
        } else {
          this.FailedLogin = 'Login failed. Please try again.';
        }
      } else {
        this.FailedLogin = 'An unexpected error occurred. Please try again later.';
      }
    }
  );
}



}
