import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel,AddUserModel, AttributePlanModel, AttributeFicheModel } from '../model/user.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { DataTablesModule } from 'angular-datatables';
import { DepartmentModel } from '../model/department.model';
import { RoleModel } from '../model/role.model';
import { FicheFonctionModel, UpdateFfModel, UploadedFiche } from '../model/fichefonction.model';
import { IntegrationPlanModel } from '../model/integrationplan.model';
import { ExcelDataModel } from '../model/exceldata.model';
import { EmpEvaModel } from '../model/EmpEva.model';
import { RespEvaModel } from '../model/RespEva.model';

import { DepModel } from '../model/dep';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private apiUrl6 = environment.apiUrl;
  private apiUrl = environment.apiUrl + '/User/';
  private apiUrl1 = environment.apiUrl + '/Department/';
  private apiUrl2 = environment.apiUrl + '/Role/';
  private apiUrl3 = environment.apiUrl + '/FicheFonction/';
  private apiUrl4= environment.apiUrl + '/IntegrationPlan/';
  private apiUrl5= environment.apiUrl + '/ExcelData/';

  constructor(private http: HttpClient) {}
  loaddeps() {
    return this.http.get<DepModel[]>("http://localhost:5234/api/Department/GetAllDepartments");
  }

  Loadusers() {
    return this.http.get<UserModel[]>(`${this.apiUrl}GetAllUsers`);
  }

  LoadempEvas() {
    return this.http.get<EmpEvaModel[]>(`http://localhost:5234/api/EmpEva/GetAllEvaluations`);
  }
  
  Loadrespevas() {
    return this.http.get<RespEvaModel[]>(`http://localhost:5234/api/RespEva/GetAllEvaluations`);
  }


  Loaddepartments() {
    return this.http.get<DepartmentModel[]>(`${this.apiUrl1}GetAllDepartments`);
  }


  Loadroles() {
    return this.http.get<RoleModel[]>(`${this.apiUrl2}GetAllRoles`);
  }


  Loadfiches() {
    return this.http.get<FicheFonctionModel[]>(`${this.apiUrl3}GetAllfichesFonction`);
  }


  Loadplans() {
    return this.http.get<IntegrationPlanModel[]>(`${this.apiUrl4}GetAllIntegrationPlans`);
  }


  Loadexceldata(){
    return this.http.get<ExcelDataModel[]>(`${this.apiUrl4}GetAllIntegrationPlans`)
  }

  addUser(user: AddUserModel): Observable<any> {
    return this.http.post(`${this.apiUrl}AddUsers`, user);
  }

  addDepartment(department : DepartmentModel): Observable<any> {
    return this.http.post(`${this.apiUrl1}AddDepartment`, department);
  }

  addRole (role : RoleModel): Observable<any> {
    return this.http.post(`${this.apiUrl2}AddRole`, role);
  }


  addInegrationPlan(integrationPlan : IntegrationPlanModel): Observable<any> {
    return this.http.post(`${this.apiUrl4}AddIntegrationPlan`, integrationPlan);
  }

  // addFicheFonction(ficheFonction: UploadedFiche): Observable<any> {
  //   return this.http.post(`${this.apiUrl3}UploadficheFonction`, ficheFonction);
  // }

  addFicheFonction(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl3}UploadficheFonction`, formData);
  }
  

  deleteUser(mat: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}DeleteUser/${mat}`);
  }

  deleteDepartment(IdDep: number): Observable<any> {
    return this.http.delete(`${this.apiUrl1}DeleteDepartment/${IdDep}`);
  }

  deleteRole(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl2}DeleteRole/${id}`);
  }

  deleteIntegrationPlan(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl4}DeleteIntegrationPlan/${id}`);
  }

  deleteFicheFonction(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl3}DeleteFicheFonction/?id=${id}`);
  }
  

  editUser(user: UserModel): Observable<any> {
    return this.http.put(`${this.apiUrl}EditUser`, user);
  }

  editDepartment(department: DepartmentModel): Observable<any> {
    return this.http.put(`${this.apiUrl1}EditDepartment`, department);
  }

  editRole (role: RoleModel): Observable<any> {
    return this.http.put(`${this.apiUrl2}EditRole`, role);
  }

  editIntegrationPlan(integrationPlan: IntegrationPlanModel): Observable<any> {
    return this.http.put(`${this.apiUrl4}EditIntegrationPlan`, integrationPlan);
  }

  // editFicheFonction(ficheFonction: FicheFonctionModel): Observable<any> {
  //   return this.http.put(`${this.apiUrl3}EditFicheFonction`, ficheFonction);
  // }

  editFicheFonction(IdFf: number, formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl3}UpdateficheFonction/${IdFf}`, formData);
  }
  

  attributeIntegrationPlan(user : AttributePlanModel): Observable<any> {
    return this.http.post(`${this.apiUrl}AttributeIntegrationPlan`, user);
  }

  attributeFicheFonction(user: AttributeFicheModel): Observable<any>{
    return this.http.post(`${this.apiUrl}AttributeFiche`, user)
  }


  uploadIntegrationPlan(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl4}upload`, formData);
  }

}

