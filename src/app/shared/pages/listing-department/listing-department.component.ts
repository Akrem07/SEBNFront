import { Component, OnInit } from '@angular/core';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { MasterService } from '../../../services/master.service';
import { DepModel } from '../../../model/dep';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddUserModel, UserModel } from '../../../model/user.model';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog module
import { ActivatedRoute, Router } from '@angular/router';
import { DepService } from '../../../services/dep.service'; 

@Component({
  selector: 'app-listing-department',
  templateUrl: './listing-department.component.html',
  styleUrls: ['./listing-department.component.css']
})

export class ListingDepartmentComponent implements OnInit {
  depForm: FormGroup;
  editForm: FormGroup;
  deleteForm: FormGroup;
  showManagePopup: boolean = false;
  showAddPopup: boolean = false;
  showEditPopup: boolean = false;
  showDeletePopup: boolean = false;

  deplist!: DepModel[];

  dtoptions: Config = {};
  dttrigger: Subject<any> = new Subject();

  constructor(private service: MasterService, 
    private fb: FormBuilder, 
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private depService:DepService,
  ) { // Add MatDialog as a constructor parameter
    this.depForm = this.fb.group({
      IdDep: ['', Validators.required],
      NameDep: ['', Validators.required],
      Post: ['', Validators.required],
    });
    this.editForm = this.fb.group({
      IdDep: ['', Validators.required],
      NameDep: ['', Validators.required],
      Post: ['', Validators.required],
    });
    this.deleteForm = this.fb.group({
      IdDep: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.Loaddeps();
    this.dtoptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [5, 10, 25],
      processing: true,
    };
  }

  Loaddeps(): void {
    this.service.loaddeps().subscribe(item => {
      this.deplist = item;
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

  onSubmit() {
    if (this.depForm.valid) {
      const newDep = this.depForm.value;
      this.service.addDepartment(newDep).subscribe(response => {
        this.closePopup('add');
        this.Loaddeps();
      }, error => {
        console.error('Error adding department:', error);
      });
    }
  }

  onEdit(){
    if (this.editForm.valid) {
      const editDep = this.editForm.value;
      this.service.editDepartment(editDep).subscribe(response => {
        this.closePopup('edit');
        this.Loaddeps();
      }, error => {
        console.error('Error updating department:', error);
      });
    }
  }

  onDelete(){
    if (this.deleteForm.valid) {
      const deleteDep = this.deleteForm.value;
      this.service.deleteDepartment(deleteDep.IdDep).subscribe(response => {
        this.closePopup('delete');
        this.Loaddeps();
      }, error => {
        console.error('Error deleting department:', error);
      });
    }
  }


  openDepDetailDialog(dep: DepModel): void {
    this.dialog.open(UserDetailsComponent, {
      data: dep,
      panelClass: 'custom-dialog-container', // Add custom class here
    });
  }

  navigateToUpdate(dep: DepModel) {
    
    // this.navigationStateService.setEmployeeToUpdate(dep);
    // this.router.navigate(['/EmployeeUpdate']);
  }


  editDep(id: number) {
    this.router.navigate(['/edit-dep', id]);
  }
  
  deleteDep(IdDep: number) {
    this.depService.deleteDepartment(IdDep).subscribe(
      (response) => {
        console.log('User deleted successfully');
        window.location.reload();  // Reload the page after successful deletion
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
  
}
