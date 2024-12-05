import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { MasterService } from '../../../services/master.service';
import { AddUserModel, UserModel } from '../../../model/user.model';
import { DepartmentModel } from '../../../model/department.model';
import { RoleModel } from '../../../model/role.model';
import { FicheFonctionModel } from '../../../model/fichefonction.model';
import { IntegrationPlanModel } from '../../../model/integrationplan.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  editForm: FormGroup;
  deleteForm: FormGroup;
  attributeficheForm: FormGroup;
  attributeplanForm: FormGroup;
  showManagePopup: boolean = false;
  showAddPopup: boolean = false;
  showEditPopup: boolean = false;
  showDeletePopup: boolean = false;
  showAttributeFichePopup: boolean = false;
  showAttributePlanPopup: boolean = false;

  user: any;

  selectedTable: string = 'users';
  showPassword: boolean = false;

  adduser!: AddUserModel[];
  userlist!: UserModel[];
  departmentlist!: DepartmentModel[];
  rolelist!: RoleModel[];
  fichelist!: FicheFonctionModel[];
  planlist!: IntegrationPlanModel[];

  dtoptions: any = {};
  dttrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective, { static: false })
  dtElement!: DataTableDirective;

  constructor(
    private service: MasterService, 
    private fb: FormBuilder,
    private router: Router,
    private userService:UserService,
    private route: ActivatedRoute,
  ) {

    this.userForm = this.fb.group({
      id: ['', Validators.required],
      mat: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      idDep: ['', Validators.required],
      idR: ['', Validators.required]
    });
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      mat: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      idDep: ['', Validators.required],
      idR: ['', Validators.required],
      // idFf: ['', Validators.required],
      // idIp: ['', Validators.required],
      // matResp: ['', Validators.required]
    });
    this.deleteForm = this.fb.group({
      mat: ['', Validators.required],
    });
    this.attributeficheForm = this.fb.group({
      mat: ['', Validators.required],
      idFf: ['', Validators.required],
    });
    this.attributeplanForm = this.fb.group({
      mat: ['', Validators.required],
      idIp: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [5, 10, 25],
      processing: true,
    };
    this.LoadAllData();
    this.showPassword = true;
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUserById(+userId).subscribe((data) => {
        this.user = data;
      });
    }
  }

  ngOnDestroy(): void {
    // Clean up the dttrigger subscription to prevent memory leaks
    this.dttrigger.unsubscribe();
  }

  LoadAllData(): void {
    this.Loadusers();
    this.Loaddepartments();
    this.Loadroles();
    this.Loadfiches();
    this.Loadplans();
  }

  Loadusers(): void {
    this.service.Loadusers().subscribe(item => {
      this.userlist = item;
      if (this.selectedTable === 'users') {
        this.dttrigger.next(null); // Trigger a refresh
      }
    });
  }

  Loaddepartments(): void {
    this.service.Loaddepartments().subscribe(item => {
      console.log('Departments data:', item); 
      this.departmentlist = item;
      if (this.selectedTable === 'departments') {
        this.dttrigger.next(null); // Trigger a refresh
      }
    });
  }

  Loadroles(): void {
    this.service.Loadroles().subscribe(item => {
      this.rolelist = item;
      if (this.selectedTable === 'roles') {
        this.dttrigger.next(null); // Trigger a refresh
      }
    });
  }

  Loadfiches(): void {
    this.service.Loadfiches().subscribe(item => {
      this.fichelist = item;
      if (this.selectedTable === 'fiches') {
        this.dttrigger.next(null); // Trigger a refresh
      }
    });
  }

  Loadplans(): void {
    this.service.Loadplans().subscribe(item => {
      this.planlist = item;
      if (this.selectedTable === 'plans') {
        this.dttrigger.next(null); // Trigger a refresh
      }
    });
  }


// Initialize a new user object
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
    case 'attributeFiche':
      this.showAttributeFichePopup = true;
      break;
    case 'attributePlan':
      this.showAttributePlanPopup = true;
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
    case 'attributeFiche':
      this.showAttributeFichePopup = false;
      break;
    case 'attributePlan':
      this.showAttributePlanPopup = false;
      break;
  }
}

onSubmit() {
  if (this.userForm.valid) {
    const newUser = this.userForm.value;
    this.service.addUser(newUser).subscribe(response => {
      this.closePopup('add');
      this.Loadusers();
    }, error => {
      console.error('Error adding user:', error);
    });
  }
}

onEdit(){
  if (this.editForm.valid) {
    const editUser = this.editForm.value;
    this.service.editUser(editUser).subscribe(response => {
      this.closePopup('edit');
      this.Loadusers();
    }, error => {
      console.error('Error updating user:', error);
    });
  }
}

onDelete(){
  if (this.deleteForm.valid) {
    const deleteUser = this.deleteForm.value;
    this.service.deleteUser(deleteUser.IdDep).subscribe(response => {
      this.closePopup('delete');
      this.Loadusers();
    }, error => {
      console.error('Error deleting user:', error);
    });
  }
}


editUser(id: number) {
  this.router.navigate(['/edit-user', id]);
}

deleteUser(mat: number) {
  this.userService.deleteUser(mat).subscribe(
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


