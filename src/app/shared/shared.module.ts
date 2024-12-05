import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualitiesComponent } from './pages/actualities/actualities.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { AdminExcelUploadComponent } from './pages/admin-excel-upload/admin-excel-upload.component';
import { AsideComponent } from './pages/aside/aside.component';
import { CardComponent } from './pages/card/card.component';
import { DepartmentManagerComponent } from './pages/department-manager/department-manager.component';
import { DmDocumentsComponent } from './pages/dm-documents/dm-documents.component';
import { DocCardComponent } from './pages/doc-card/doc-card.component';
import { EmpEvaluationComponent } from './pages/emp-evaluation/emp-evaluation.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EvaluationComponent } from './pages/evaluation/evaluation.component';
import { ExcelTableComponent } from './pages/excel-table/excel-table.component';
import { FunctionSheetComponent } from './pages/function-sheet/function-sheet.component';
import { HeaderNavDashboardComponent } from './pages/header-nav-dashboard/header-nav-dashboard.component';
import { HierarchicalManagerComponent } from './pages/hierarchical-manager/hierarchical-manager.component';
import { HmDocumentsComponent } from './pages/hm-documents/hm-documents.component';
import { HmEvaluationComponent } from './pages/hm-evaluation/hm-evaluation.component';
import { HmIpEvaluationComponent } from './pages/hm-ip-evaluation/hm-ip-evaluation.component';
import { IntegrationPlanComponent } from './pages/integration-plan/integration-plan.component';
import { IpScheduleComponent } from './pages/ip-schedule/ip-schedule.component';
import { LinkCardComponent } from './pages/link-card/link-card.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileCardComponent } from './pages/profile-card/profile-card.component';
import { SideBarDepmanagerComponent } from './pages/side-bar-depmanager/side-bar-depmanager.component';
import { SideBarEmployeeComponent } from './pages/side-bar-employee/side-bar-employee.component';
import { SideBarHmComponent } from './pages/side-bar-hm/side-bar-hm.component';
import { SideBarSuperadminComponent } from './pages/side-bar-superadmin/side-bar-superadmin.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { SuperAdminComponent } from './pages/super-admin/super-admin.component';
import { UserExcelViewComponent } from './pages/user-excel-view/user-excel-view.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { FormsModule, NgModel } from '@angular/forms';
import { ListingComponent } from './pages/listing/listing.component';
import { DataTablesModule } from 'angular-datatables';
import { ListingDepartmentComponent } from './pages/listing-department/listing-department.component';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard'; 
import { Login1Component } from './pages/login1/login1.component';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExcelViewerComponent } from './pages/excel-viewer/excel-viewer.component';
import { ExcelUploadComponent } from './pages/excel-upload/excel-upload.component';
import { FileManagerComponent } from './pages/file-manager/file-manager.component';
import { SafePipe } from './pipe/safe-pipe.pipe';
import { PdfViewerComponent } from './pages/pdf-viewer/pdf-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ManagmentComponent } from './pages/managment/managment.component';
import { GetEvaluationComponent } from './pages/get-evaluation/get-evaluation.component';
import { PopupComponent } from './pages/popup/popup.component';
import { ListingRolesComponent } from './pages/listing-roles/listing-roles.component';
import { ListingSheetsComponent } from './pages/listing-sheets/listing-sheets.component';
import { ListingPlansComponent } from './pages/listing-plans/listing-plans.component';
import { UploadExcelComponent } from './pages/upload-excel/upload-excel.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { DepartmentDetailsComponent } from './pages/department-details/department-details.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { TablesComponent } from './pages/tables/tables.component';
import { EditDepComponent } from './pages/edit-dep/edit-dep.component';

@NgModule({
  declarations: [
    ActualitiesComponent,
    AddUserComponent,
    AdminExcelUploadComponent,
    AsideComponent,
    CardComponent,
    DepartmentManagerComponent,
    DmDocumentsComponent,
    DocCardComponent,
    EmpEvaluationComponent,
    EmployeeComponent,
    EvaluationComponent,
    ExcelTableComponent,
    FunctionSheetComponent,
    HeaderNavDashboardComponent,
    HierarchicalManagerComponent,
    HmDocumentsComponent,
    HmEvaluationComponent,
    HmIpEvaluationComponent,
    IntegrationPlanComponent,
    IpScheduleComponent,
    LinkCardComponent,
    LoginComponent,
    ProfileCardComponent,
    SideBarDepmanagerComponent,
    SideBarEmployeeComponent,
    SideBarHmComponent,
    SideBarSuperadminComponent,
    SidebarComponent,
    SuperAdminComponent,
    UserExcelViewComponent,
    UserListComponent,
    ListingComponent,
    ListingDepartmentComponent,
    Login1Component,
    ExcelViewerComponent,
    ExcelUploadComponent,
    FileManagerComponent,
    SafePipe,
    PdfViewerComponent,
    ManagmentComponent,
    GetEvaluationComponent,
    PopupComponent,
    ListingRolesComponent,
    ListingSheetsComponent,
    ListingPlansComponent,
    UploadExcelComponent,
    UserDetailsComponent,
    DepartmentDetailsComponent,
    EditUserComponent,
    TablesComponent,
    EditDepComponent   

  ],
  imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      DataTablesModule,
      RouterModule,
      ReactiveFormsModule,
      NgxExtendedPdfViewerModule,
    
      
    ],
  exports: [
    ActualitiesComponent,
    AddUserComponent,
    AdminExcelUploadComponent,
    AsideComponent,
    CardComponent,
    DepartmentManagerComponent,
    DmDocumentsComponent,
    DocCardComponent,
    EmpEvaluationComponent,
    EmployeeComponent,
    EvaluationComponent,
    ExcelTableComponent,
    FunctionSheetComponent,
    HeaderNavDashboardComponent,
    HierarchicalManagerComponent,
    HmDocumentsComponent,
    HmEvaluationComponent,
    HmIpEvaluationComponent,
    IntegrationPlanComponent,
    IpScheduleComponent,
    LinkCardComponent,
    LoginComponent,
    ProfileCardComponent,
    SideBarDepmanagerComponent,
    SideBarEmployeeComponent,
    SideBarHmComponent,
    SideBarSuperadminComponent,
    SidebarComponent,
    SuperAdminComponent,

    UserExcelViewComponent,
    UserListComponent,
    SafePipe,
  ]

})
export class SharedModule { }
