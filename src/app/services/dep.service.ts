import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepModel } from '../model/dep';

@Injectable({
  providedIn: 'root'
})
export class DepService {

  private apiUrl = environment.apiUrl + '/Department/';

  constructor(private http: HttpClient) {}



  // Get all departments
  getAllDepartments(): Observable<DepModel[]> {
    return this.http.get<DepModel[]>(`${this.apiUrl}GetAllDepartments`);
  }

   // Add a user
   addDepartment(dep: DepModel): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}AddDepartment`, dep, { responseType: 'text' as 'json' });
  }

 
  // Edit a user
  editDepartment(dep: DepModel): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}EditDepartment`, dep, { responseType: 'text' as 'json' });
  }

  deleteDepartment(IdDep: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}DeleteDepartment?IdDep=${IdDep}`, { responseType: 'text' as 'json' });
  }

  getDepartmentById(IdDep: number): Observable<DepModel> {
    return this.http.get<DepModel>(`${this.apiUrl}GetDepartmentById/${IdDep}`);
  }
}
