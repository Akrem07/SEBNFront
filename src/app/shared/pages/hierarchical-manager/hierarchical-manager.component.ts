import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AsideComponent } from '../aside/aside.component';
import { EvaluationComponent } from '../evaluation/evaluation.component';
import { FunctionSheetComponent } from '../function-sheet/function-sheet.component';
import { HeaderNavDashboardComponent } from '../header-nav-dashboard/header-nav-dashboard.component';
import { IntegrationPlanComponent } from '../integration-plan/integration-plan.component';
import { ActualitiesComponent } from '../actualities/actualities.component';
import { SideBarEmployeeComponent } from "../side-bar-employee/side-bar-employee.component";
import { IpScheduleComponent } from '../ip-schedule/ip-schedule.component';
import { SideBarHmComponent } from "../side-bar-hm/side-bar-hm.component";
import { HmEvaluationComponent } from '../hm-evaluation/hm-evaluation.component';
import { HmDocumentsComponent } from '../hm-documents/hm-documents.component';

@Component({
  selector: 'app-hierarchical-manager',

  templateUrl: './hierarchical-manager.component.html',
  styleUrl: './hierarchical-manager.component.css'
})
export class HierarchicalManagerComponent {
  pageName:string="Actualities";

  listen(event:any)
  {
    this.pageName=event;
  }
}
