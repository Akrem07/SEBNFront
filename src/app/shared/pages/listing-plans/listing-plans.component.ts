import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IntegrationPlanModel } from '../../../model/integrationplan.model';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-listing-plans',
  templateUrl: './listing-plans.component.html',
  styleUrl: './listing-plans.component.css'
})
export class ListingPlansComponent implements OnInit {

  selectedFile: File | null = null;

  planForm: FormGroup;
  editForm: FormGroup;
  deleteForm: FormGroup;
  showManagePopup: boolean = false;
  showAddPopup: boolean = false;
  showEditPopup: boolean = false;
  showDeletePopup: boolean = false;

  planlist!: IntegrationPlanModel[];

  dtoptions: Config = {};
  dttrigger: Subject<any> = new Subject();


  loading: boolean = false; // Add this line
  error: string | null = null; // Add this line

  constructor(private service: MasterService, private fb: FormBuilder) {
    this.planForm = this.fb.group({
      IdIp: ['', Validators.required],
      NameIp: ['', Validators.required],
      RowData: ['', Validators.required],
    });
    this.editForm = this.fb.group({
      IdIp: ['', Validators.required],
      NameIp: ['', Validators.required],
      RowData: ['', Validators.required],
    });
    this.deleteForm = this.fb.group({
      IdIp: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.Loadplans();
    this.dtoptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [5, 10, 25],
      processing: true,
    };
  }

  Loadplans(): void {
    this.service.Loadplans().subscribe(item => {
      this.planlist = item;
      this.dttrigger.next(null);
    });
  }


  // openPopup() {
  //   this.showPopup = true;
  // }

  openPopup(type: string) {
    switch (type) {
      case 'add':
        this.showAddPopup = true;
        break;
      case 'edit':
        this.showEditPopup = true;
        break;
      case 'delete':
        this.showDeletePopup = true;
        break;
      case 'manage':
        this.showManagePopup = true;
        break;
    }
  }

  closePopup(type: string) {
    switch (type) {
      case 'add':
        this.showAddPopup = false;
        break;
      case 'edit':
        this.showEditPopup = false;
        break;
      case 'delete':
        this.showDeletePopup = false;
        break;
      case 'manage':
        this.showManagePopup = false;
        break;
    }
  }



  // onSubmit(): void {
  //   if (this.planForm.valid && this.selectedFile) {
  //     const formData: FormData = new FormData();
  
  //     // Append the file with the key 'fileDate' as expected by the backend
  //     formData.append('fileDate', this.selectedFile); // Changed from 'file' to 'fileDate'
  
  //     this.loading = true;
  //     this.service.addInegrationPlan(formData).subscribe(
  //       response => {
  //         this.closePopup('add');
  //         this.Loadplans(); // Refresh the list
  //         this.loading = false;
  //       },
  //       error => {
  //         this.error = 'Error adding Integration plan: ' + error.message;
  //         console.error('Error adding Integration plan:', error);
  //         this.loading = false;
  //       }
  //     );
  //   }
  // }
  
  

  // onEdit(): void {
  //   if (this.editForm.valid && this.selectedFile) {
  //     const formData: FormData = new FormData();
  
  //     // Append the selected file and mresp to the form data
  //     formData.append('file', this.selectedFile);
  //     formData.append('mresp', this.editForm.get('mresp')?.value.toString());
  
  //     // Get the IdFf of the fiche being edited
  //     const IdFf = this.editForm.get('IdFf')?.value;
  
  //     this.service.editIntegrationPlan(integrationPlan).subscribe(
  //       response => {
  //         this.closePopup('edit');
  //         this.Loadplans(); // Refresh the list
  //       },
  //       error => {
  //         console.error('Error updating Integration plan:', error);
  //       }
  //     );
  //   }
  // }
  
  onDelete(){
    if (this.deleteForm.valid) {
      const deleteFicheFonction = this.deleteForm.value;
      this.service.deleteFicheFonction(deleteFicheFonction.IdFf).subscribe(response => {
        this.closePopup('delete');
        this.Loadplans();
      }, error => {
        console.error('Error deleting Integartion plan:', error);
      });
    }
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedFile = input.files[0];
    }
  }



  
}