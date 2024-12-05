import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';

import { AddUserModel } from '../../../model/user.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {

  userExists: boolean | null = null;
  FormValid: boolean | null = null;
  model: AddUserModel = { id: 0, mat: 0, firstName: '', lastName: '', password: '', idDep: 0, idR: 0 };

  constructor(private userService: UserService, private router: Router) { }

  checkUserExists(event: any): void {
    const mat = event.target.value;
    if (mat) {
      this.userService.getUserById(Number(mat)).subscribe({
        next: () => {
          this.userExists = true;
        },
        error: () => {
          this.userExists = false;
        }
      });
    } else {
      this.userExists = null;
    }
  }

  onFormSubmit(): void {
    if (this.isFormValid()) {
      this.userService.addUsers(this.model).subscribe({
        next: (response: string) => {
          this.router.navigate(['/user-list'], { state: { added: true } });
        },
        error: (error) => {
          console.error('Error status:', error.status);
          console.error('Error message:', error.message);
        }
      });
    } else {
      this.FormValid = false;
    }
  }

  isFormValid(): boolean {
    return this.model.mat !== 0 &&
           this.model.idDep !== 0 &&
           this.model.idR !== 0 &&
           this.model.firstName?.trim() !== '' &&
           this.model.lastName?.trim() !== '' &&
           this.model.password?.trim() !== '';
  }
}
