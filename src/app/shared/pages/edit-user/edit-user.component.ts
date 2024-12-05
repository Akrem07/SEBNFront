import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service'; // Import your User service
import { FormGroup, Validators, FormBuilder } from '@angular/forms'; // Import FormBuilder
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
})
export class EditUserComponent implements OnInit {
  user: any = {};
  editForm: FormGroup; // Add type to editForm
  fb: FormBuilder; // Add fb property
  attributeficheForm:FormGroup
  attributeplanForm:FormGroup
  showAttributeFichePopup = false
  showAttributePlanPopup = false
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private service: MasterService,
    private formBuilder: FormBuilder // Inject FormBuilder
  ) {
    this.fb = formBuilder; // Initialize fb property
    this.editForm = this.fb.group({
      id: ['', Validators.required],
      mat: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      idDep: ['', Validators.required],
      idR: ['', Validators.required],
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
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUserById(+userId).subscribe((data) => {
        this.user = data;
      });
    }
  }  

  saveUser() {
    this.userService.editUser(this.user).subscribe((response) => {
    });
  }

//-------------------------------------------------------------------------------


// Initialize a new user object
openPopup(type: string) {
  switch (type) {
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
    case 'attributeFiche':
      this.showAttributeFichePopup = false;
      break;
    case 'attributePlan':
      this.showAttributePlanPopup = false;
      break;
  }
}


onAttributePlan(){
  if (this.attributeplanForm.valid) {
    const attributePlan = this.attributeplanForm.value;
    this.service.attributeIntegrationPlan(attributePlan).subscribe(response => {
      this.closePopup('attributePlan');
      window.location.reload();
    }, error => {
      console.error('Error attributing plan:', error);
    });
  }
}

onAttributeFiche(){
  if (this.attributeficheForm.valid){
    const attributeFiche = this.attributeficheForm.value;
    this.service.attributeFicheFonction(attributeFiche).subscribe(response => {
      this.closePopup('attributeFiche');
      window.location.reload();
    }, error => {
      console.error('Error attributing Function Sheet:', error);
    });
  }
}

}
