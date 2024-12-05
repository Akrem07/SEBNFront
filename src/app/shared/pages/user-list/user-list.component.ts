import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../model/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit {
  users: UserModel[] = [];
  error: string | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data: UserModel[]) => {
        this.users = data;
      },
      error: (err) => {
        this.error = 'Failed to load users.';
        console.error('Error status:', err.status);
        console.error('Error message:', err.message);
      }
    });
  }
}
