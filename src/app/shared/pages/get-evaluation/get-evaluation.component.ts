import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { MasterService } from '../../../services/master.service';
import { EmpEvaModel } from '../../../model/EmpEva.model';
import { RespEvaModel } from '../../../model/RespEva.model';


@Component({
  selector: 'app-get-evaluation',
  templateUrl: './get-evaluation.component.html',
  styleUrl: './get-evaluation.component.css'
})
export class GetEvaluationComponent implements OnInit, OnDestroy{

  selectedTable: string = 'EmpEvas';

  EmpEvalist!: EmpEvaModel[];
  RespEvalist!: RespEvaModel[];
  

  dtoptions: any = {};
  dttrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [5, 10, 25],
      processing: true,
    };
    this.LoadAllData();
  }

  ngOnDestroy(): void {
    // Clean up the dttrigger subscription to prevent memory leaks
    this.dttrigger.unsubscribe();
  }

  LoadAllData(): void {
    this.Loadrespevas();
    this.Loadempevas();
  }


  Loadempevas(): void {
    this.service.LoadempEvas().subscribe(item => {
      this.EmpEvalist = item;
      if (this.selectedTable === 'EmpEvas') {
        this.dttrigger.next(null); // Trigger a refresh
      }
    });
  }
  
  Loadrespevas(): void {
    this.service.Loadrespevas().subscribe(item => {
      this.RespEvalist = item;
      if (this.selectedTable === 'RespRvas') {
        console.log(item)
        this.dttrigger.next(null); // Trigger a refresh
      }
    });
  }



}


