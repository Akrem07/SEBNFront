import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { SafePipe } from '../../pipe/safe-pipe.pipe';

@Component({
  selector: 'app-hm-ip-evaluation',
  templateUrl: './hm-ip-evaluation.component.html',
  styleUrls: ['./hm-ip-evaluation.component.css']
})
export class HmIpEvaluationComponent implements OnInit {

  evaluationForm: FormGroup = new FormGroup({
    idReva: new FormControl(0),  // Initialize idEva with a default value
    Forces: new FormControl('', Validators.required),
    Aspects: new FormControl('', Validators.required), // Employee Strengths
    adaptation: new FormControl('', Validators.required),
    autonomy: new FormControl('', Validators.required),
    quality: new FormControl('', Validators.required),
    goals: new FormControl('', Validators.required),
    others: new FormControl('', Validators.required),
    specifiqueCommentaire1: new FormControl('', Validators.required),
    evaluation1 : new FormControl('', Validators.required),
    ProbationRéussie : new FormControl('', Validators.required),
    evaluation : new FormControl('', Validators.required),
    ProbationNonRéussie : new FormControl('', Validators.required),
    mat: new FormControl(0)  // Initialize mat with a default value
  });

  matricule: number | null = null;
  formSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.matricule = this.authService.decodedToken()?.sub || null;
    if (this.matricule) {
      this.evaluationForm.patchValue({
        idReva: this.matricule,
        mat: this.matricule
      });
      
      this.http.get<boolean>(`http://localhost:5234/api/RespEva/GetEvalByMat/${this.matricule}`).subscribe(
        hasSubmitted => {
          this.formSubmitted = hasSubmitted;
        }
      )
    }
    
  }


  get Forces() {return this.evaluationForm.get('Forces')}
  get Aspects() {return this.evaluationForm.get('Forces')}

  get adaptation() {return this.evaluationForm.get('adaptation')}
  get autonomy() {return this.evaluationForm.get('autonomy')}
  get quality() {return this.evaluationForm.get('quality')}
  get goals() {return this.evaluationForm.get('goals')}
  get others() {return this.evaluationForm.get('others')}
  
  get specifiqueCommentaire1() {return this.evaluationForm.get('specifiqueCommentaire1')}
  get evaluation1 () {return this.evaluationForm.get('evaluation1')}
  get ProbationReussie () {return this.evaluationForm.get('ProbationReussie')}
  get evaluation () {return this.evaluationForm.get('evaluation')}
  get ProbationNonReussie () {return this.evaluationForm.get('ProbationNonReussie')}

  submit(evaluationForm: FormGroupDirective){
    if (this.evaluationForm.valid && this.matricule) {
      // console.log(JSON.stringify(this.evaluationForm.value));
      const formData = this.evaluationForm.value;

      // Post the form data to the API
      this.http.post(`http://localhost:5234/api/RespEva/Submit`, formData).subscribe(
        response => {
          console.log('Evaluation submitted successfully', response);
          this.formSubmitted = true;
          evaluationForm.resetForm();
        },
        error => {
          console.error('Error submitting evaluation', error);
        }
      );
    } else {
      console.error('Form already submitted or matricule not found');
    }
  }

}
