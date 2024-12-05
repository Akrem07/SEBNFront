import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualitiesComponent } from './shared/pages/actualities/actualities.component';
import { IntegrationPlanComponent } from './shared/pages/integration-plan/integration-plan.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { FunctionSheetComponent } from './shared/pages/function-sheet/function-sheet.component';
import { EvaluationComponent } from './shared/pages/evaluation/evaluation.component';
import { EmployeeComponent } from './shared/pages/employee/employee.component';
import { SuperAdminComponent } from './shared/pages/super-admin/super-admin.component';
import { IpScheduleComponent } from './shared/pages/ip-schedule/ip-schedule.component';
import { DepartmentManagerComponent } from './shared/pages/department-manager/department-manager.component';
import { HierarchicalManagerComponent } from './shared/pages/hierarchical-manager/hierarchical-manager.component';
import { HmEvaluationComponent } from './shared/pages/hm-evaluation/hm-evaluation.component';
import { HmDocumentsComponent } from './shared/pages/hm-documents/hm-documents.component';
import { AddUserComponent } from './shared/pages/add-user/add-user.component';
import { UserListComponent } from './shared/pages/user-list/user-list.component';
import { UserExcelViewComponent } from './shared/pages/user-excel-view/user-excel-view.component';
import { AdminExcelUploadComponent } from './shared/pages/admin-excel-upload/admin-excel-upload.component';
import { ListingComponent } from './shared/pages/listing/listing.component';
import { ListingDepartmentComponent } from './shared/pages/listing-department/listing-department.component';

import { AuthGuard } from './guards/auth.guard'; 
import { Login1Component } from './shared/pages/login1/login1.component';
import { EditUserComponent } from './shared/pages/edit-user/edit-user.component';
import { EditDepComponent } from './shared/pages/edit-dep/edit-dep.component';


const routes: Routes = [


  {
    path: 'actualities',
    component:ActualitiesComponent , 
    // canActivate: [AuthGuard]
  },
  {
    path: 'integration-plan',
    component:IntegrationPlanComponent,
    // canActivate: [AuthGuard]
  },

  {
    path: 'function-sheet', 
    component:FunctionSheetComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'evaluation', 
    component:EvaluationComponent, 
     canActivate: [AuthGuard] 
  },
  {
    path: 'employee', 
    component:EmployeeComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'super-admin', 
    component:SuperAdminComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'hier-manager', 
    component:HierarchicalManagerComponent,
    canActivate: [AuthGuard]
  },
    
  {
    path: 'dep-manager', 
    component:DepartmentManagerComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'ip-schedule', 
    component: IpScheduleComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'hm-evaluation', 
    component: HmEvaluationComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'docs', 
    component: HmDocumentsComponent,  
    // canActivate: [AuthGuard]
  },

  {
    path: 'adduser', 
    component: AddUserComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'userlist', 
    component: UserListComponent, 
    // canActivate: [AuthGuard]
  },
  {
    path: 'listing', 
    component: ListingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'deplisting', 
    component: ListingDepartmentComponent,
    canActivate: [AuthGuard]
  },
  { path: 'edit-user/:id', component: EditUserComponent },
  { path: 'edit-dep/:id', component: EditDepComponent },
  { 
    path: 'userex', 
    component: UserExcelViewComponent, 
    // canActivate: [AuthGuard]
  },
  { 
    path: 'admin', 
    component: AdminExcelUploadComponent,
    // canActivate: [AuthGuard]
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
