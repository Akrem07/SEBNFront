import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AsideComponent } from '../aside/aside.component';
import { EvaluationComponent } from '../evaluation/evaluation.component';
import { FunctionSheetComponent } from '../function-sheet/function-sheet.component';
import { HeaderNavDashboardComponent } from '../header-nav-dashboard/header-nav-dashboard.component';
import { IntegrationPlanComponent } from '../integration-plan/integration-plan.component';
import { ActualitiesComponent } from '../actualities/actualities.component';
import { SideBarEmployeeComponent } from "../side-bar-employee/side-bar-employee.component";

@Component({
  selector: 'app-super-admin',

  templateUrl: './super-admin.component.html',
  styleUrl: './super-admin.component.css'
})
export class SuperAdminComponent {
  pageName:string="Actualities";

  listen(event:any)
  {
    this.pageName=event;
  }
}
