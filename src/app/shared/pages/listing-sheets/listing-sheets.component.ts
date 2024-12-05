import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FicheFonctionModel } from '../../../model/fichefonction.model';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-listing-sheets',
  templateUrl: './listing-sheets.component.html',
  styleUrl: './listing-sheets.component.css'
})
export class ListingSheetsComponent implements OnInit {

  selectedFile: File | null = null;

  sheetForm: FormGroup;
  editForm: FormGroup;
  deleteForm: FormGroup;
  showManagePopup: boolean = false;
  showAddPopup: boolean = false;
  showEditPopup: boolean = false;
  showDeletePopup: boolean = false;

  sheetlist!: FicheFonctionModel[];

  dtoptions: Config = {};
  dttrigger: Subject<any> = new Subject();


  loading: boolean = false; // Add this line
  error: string | null = null; // Add this line

  constructor(private service: MasterService, private fb: FormBuilder) {
    this.sheetForm = this.fb.group({
      mresp: ['', Validators.required],
      FileData: ['', Validators.required],
    });
    this.editForm = this.fb.group({
      IdFf: ['', Validators.required],
      mresp: ['', Validators.required],
      FileData: ['', Validators.required],
    });
    this.deleteForm = this.fb.group({
      IdFf: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.Loadfiches();
    this.dtoptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [5, 10, 25],
      processing: true,
    };
  }

  Loadfiches(): void {
    this.service.Loadfiches().subscribe(item => {
      this.sheetlist = item;
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

  // onSubmit() {
  //   if (this.sheetForm.valid) {
  //     const newfiche = this.sheetForm.value;
  //     this.service.addFicheFonction(newfiche).subscribe(response => {
  //       this.closePopup('add');
  //       this.Loadfiches();
  //     }, error => {
  //       console.error('Error adding Function Sheet:', error);
  //     });
  //   }
  // }

  onSubmit(): void {
    if (this.sheetForm.valid && this.selectedFile) {
      const formData: FormData = new FormData();
  
      // Append the file with the key 'fileDate' as expected by the backend
      formData.append('fileDate', this.selectedFile); // Changed from 'file' to 'fileDate'
      formData.append('mresp', this.sheetForm.get('mresp')?.value.toString());
  
      this.loading = true;
      this.service.addFicheFonction(formData).subscribe(
        response => {
          this.closePopup('add');
          this.Loadfiches(); // Refresh the list
          this.loading = false;
        },
        error => {
          this.error = 'Error adding Function Sheet: ' + error.message;
          console.error('Error adding Function Sheet:', error);
          this.loading = false;
        }
      );
    }
  }
  
  

  onEdit(): void {
    if (this.editForm.valid && this.selectedFile) {
      const formData: FormData = new FormData();
  
      // Append the selected file and mresp to the form data
      formData.append('file', this.selectedFile);
      formData.append('mresp', this.editForm.get('mresp')?.value.toString());
  
      // Get the IdFf of the fiche being edited
      const IdFf = this.editForm.get('IdFf')?.value;
  
      this.service.editFicheFonction(IdFf, formData).subscribe(
        response => {
          this.closePopup('edit');
          this.Loadfiches(); // Refresh the list
        },
        error => {
          console.error('Error updating Function sheet:', error);
        }
      );
    }
  }
  
  onDelete(){
    if (this.deleteForm.valid) {
      const deleteFicheFonction = this.deleteForm.value;
      this.service.deleteFicheFonction(deleteFicheFonction.IdFf).subscribe(response => {
        this.closePopup('delete');
        this.Loadfiches();
      }, error => {
        console.error('Error deleting Function sheet:', error);
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