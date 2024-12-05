import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AsideComponent } from '../aside/aside.component';
import { EvaluationComponent } from '../evaluation/evaluation.component';
import { FunctionSheetComponent } from '../function-sheet/function-sheet.component';
import { HeaderNavDashboardComponent } from '../header-nav-dashboard/header-nav-dashboard.component';
import { IntegrationPlanComponent } from '../integration-plan/integration-plan.component';
import { ActualitiesComponent } from '../actualities/actualities.component';
import { SideBarEmployeeComponent } from "../side-bar-employee/side-bar-employee.component";
import { SideBarDepmanagerComponent } from "../side-bar-depmanager/side-bar-depmanager.component";
import { HmDocumentsComponent } from '../hm-documents/hm-documents.component';

@Component({
  selector: 'app-department-manager',

  templateUrl: './department-manager.component.html',
  styleUrl: './department-manager.component.css'
})
export class DepartmentManagerComponent {
  pageName:string="Actualities";

  listen(event:any)
  {
    this.pageName=event;
  }
}
