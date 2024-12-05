import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel, AddUserModel } from '../model/user.model'; // Assuming UserModel import is correct
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl + '/User/';

  constructor(private http: HttpClient) {}

  getUserWithIntegrationPlan(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GetUserWithIntegrationPlan/${userId}`);
  }

  // Get all users
  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.apiUrl}GetAllUsers`);
  }

  // Add a user
  addUsers(user: AddUserModel): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}AddUsers`, user, { responseType: 'text' as 'json' });
  }

 
  // Edit a user
   editUser(user: UserModel): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}EditUser`, user, { responseType: 'text' as 'json' });
  }


  // getUserById(id: number) {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  // updateUser(user: any) {
  //   return this.http.put(`${this.baseUrl}/${user.id}`, user);
  // }

  // Delete a user by ID
   deleteUser(mat: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}DeleteUser?Mat=${mat}`, { responseType: 'text' as 'json' });
  }

  // Get user by ID (Mat)
   getUserById(mat: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.apiUrl}GetUserByMat/${mat}`);
  }

  // Get user by name
   getUserByName(firstName: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.apiUrl}GetUserByName/${firstName}`);
  }

  // Get users by department ID
   getUserByDep(idDep: number): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.apiUrl}GetUserByDep/${idDep}`);
  }
}
