import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleModel } from '../../../model/role.model';
import { Config } from 'datatables.net';
import { Subject } from 'rxjs';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-listing-roles',
  templateUrl: './listing-roles.component.html',
  styleUrl: './listing-roles.component.css'
})
export class ListingRolesComponent implements OnInit {

  roleForm: FormGroup;
  editForm: FormGroup;
  deleteForm: FormGroup;
  showManagePopup: boolean = false;
  showAddPopup: boolean = false;
  showEditPopup: boolean = false;
  showDeletePopup: boolean = false;

  rolelist!: RoleModel[];

  dtoptions: Config = {};
  dttrigger: Subject<any> = new Subject();

  constructor(private service: MasterService, private fb: FormBuilder) {
    this.roleForm = this.fb.group({
      IdR: ['', Validators.required],
      DescR:  ['', Validators.required],
    });
    this.editForm = this.fb.group({
      IdR: ['', Validators.required],
      DescR:  ['', Validators.required],
    });
    this.deleteForm = this.fb.group({
      IdR: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.Loadroles();
    this.dtoptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [5, 10, 25],
      processing: true,
    };
  }

  Loadroles(): void {
    this.service.Loadroles().subscribe(item => {
      this.rolelist = item;
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
    if (this.roleForm.valid) {
      const newRole = this.roleForm.value;
      this.service.addRole(newRole).subscribe(response => {
        this.closePopup('add');
        this.Loadroles();
      }, error => {
        console.error('Error adding role:', error);
      });
    }
  }

  onEdit(){
    if (this.editForm.valid) {
      const editRole = this.editForm.value;
      this.service.editRole(editRole).subscribe(response => {
        this.closePopup('edit');
        this.Loadroles();
      }, error => {
        console.error('Error updating role:', error);
      });
    }
  }

  onDelete(){
    if (this.deleteForm.valid) {
      const deleteRole = this.deleteForm.value;
      this.service.deleteRole(deleteRole.IdR).subscribe(response => {
        this.closePopup('delete');
        this.Loadroles();
      }, error => {
        console.error('Error deleting role:', error);
      });
    }
  }
}