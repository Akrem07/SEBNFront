import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../../helpers/validationform';
import { NgToastService } from 'ng-angular-popup';
import { UserStoreService } from '../../../services/user-store.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: NgToastService,
    private userStore: UserStoreService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      mat: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }



  onSubmit() {
    console.log("Form Submitted", this.loginForm.valid);
    if (this.loginForm.valid) {
      const mat = this.loginForm.value.mat;
      const password = this.loginForm.value.password;
  
      this.auth.signIn(mat, password).subscribe({
        next: (res) => {
          if (res.accessToken) { // Make sure you're checking for the correct field
            this.auth.storeToken(res.accessToken);
            this.auth.storeRefreshToken(res.refreshToken);
  
            // Store user data in UserStoreService
            this.userStore.setFullNameForStore(res.fullName);
            this.userStore.setRoleForStore(res.role);
  
            this.loginForm.reset();
            this.toast.success('Login successful');
            this.router.navigate(['employee']).then(success => {
              if (success) {
                console.log("Navigation successful");
              } else {
                console.log("Navigation failed");
              }
            });
          } else {
            this.toast.warning(res.message || 'Login failed');
          }
        },
        error: (err) => {
          console.error("Login error:", err);
          this.toast.warning('Login failed. Please try again.');
        }
      });
    } else {
      console.log("Form is Invalid");
      ValidateForm.validateAllFormFields(this.loginForm);
    }
  }
  
  
  



  // onSubmit() {
  //   console.log("Form Submitted", this.loginForm.valid);
  //   if (this.loginForm.valid) {
  //     this.auth.signIn(this.loginForm.value.mat,this.loginForm.value.password).subscribe({
  //       next: (res) => {
  //         if (res === 'Success') {
  //           this.loginForm.reset();
  //           this.toast.success('Login successful');
  //           this.router.navigate(['employee']);
  //         } else {
  //           this.toast.warning(res);
  //         }
  //       },
  //       error: (err) => {
  //         this.toast.warning('Login failed. Please try again.');
  //       }
  //     });
  //   } else {
  //     console.log("Form is Invalid");
  //     ValidateForm.validateAllFormFields(this.loginForm);
  //   }
  // }
}
