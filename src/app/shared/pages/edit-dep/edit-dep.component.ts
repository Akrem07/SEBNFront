import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DepService } from '../../../services/dep.service'; 

@Component({
  selector: 'app-edit-dep',
  templateUrl: './edit-dep.component.html',
  styleUrls: ['./edit-dep.component.css']
})
export class EditDepComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private depService: DepService,
    private formBuilder: FormBuilder
  ){
    this.editForm = this.formBuilder.group({
      IdDep: ['', Validators.required],
      NameDep: ['', Validators.required],
      Post: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const departId = this.route.snapshot.paramMap.get('id');
    if (departId) {
      this.depService.getDepartmentById(+departId).subscribe((data) => {
        // Populate the form with the fetched data
        this.editForm.patchValue({
          IdDep: data.idDep,
          NameDep: data.nameDep,
          Post: data.post
        });
      });
    }
  }

  saveDep() {
    if (this.editForm.valid) {
      this.depService.editDepartment(this.editForm.value).subscribe((response) => {
        // Handle the response after saving the department
      });
    }
  }
}
