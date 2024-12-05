import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emp-evaluation',
  templateUrl: './emp-evaluation.component.html',
  styleUrls: ['./emp-evaluation.component.css']
})
export class EmpEvaluationComponent implements OnInit {

  evaluationForm: FormGroup = new FormGroup({
      idEva: new FormControl(0),  // Initialize idEva with a default value
      accueilQualite:  new FormControl('',Validators.required),
      livretInfos:  new FormControl('',Validators.required),
      serviceAccueil:  new FormControl('',Validators.required),
      accueilCommentaires:  new FormControl('',Validators.required),
      generiqueFormationQualite:  new FormControl('',Validators.required),
      generiqueEncadrement:  new FormControl('',Validators.required),
      generiqueConditions: new FormControl('',Validators.required),
      generiqueCommentaires:  new FormControl('',Validators.required),
      specifiqueFormationQualite:  new FormControl('',Validators.required),
      specifiqueEncadrement:  new FormControl('',Validators.required),
      specifiqueConditions:  new FormControl('',Validators.required),
      objectifsClairs: new FormControl('',Validators.required),
      perimetrePoste: new FormControl('',Validators.required),
      specifiqueCommentaires: new FormControl('',Validators.required),
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
        idEva: this.matricule,
        mat: this.matricule
      });
      
      this.http.get<boolean>(`http://localhost:5234/api/EmpEva/GetEvalByMat/${this.matricule}`).subscribe(
        hasSubmitted => {
          this.formSubmitted = hasSubmitted;
        }
      )
    }
    
  }


  get accueilQualite() {return this.evaluationForm.get('accueilQualite')}
  get livretInfos() {return this.evaluationForm.get('livretInfos')}
  get serviceAccueil() {return this.evaluationForm.get('serviceAccueil')}
  get accueilCommentaires() {return this.evaluationForm.get('accueilCommentaires')}
  get generiqueFormationQualite() {return this.evaluationForm.get('generiqueFormationQualite')}
  get generiqueEncadrement() {return this.evaluationForm.get('generiqueEncadrement')}
  get generiqueConditions() {return this.evaluationForm.get('generiqueConditions')}
  get generiqueCommentaires() {return this.evaluationForm.get('generiqueCommentaires')}
  get specifiqueFormationQualite() {return this.evaluationForm.get('specifiqueFormationQualite')}
  get specifiqueEncadrement() {return this.evaluationForm.get('specifiqueEncadrement')}
  get specifiqueConditions() {return this.evaluationForm.get('specifiqueConditions')}
  get objectifsClairs() {return this.evaluationForm.get('objectifsClairs')}
  get perimetrePoste() {return this.evaluationForm.get('perimetrePoste')}
  get specifiqueCommentaires() {return this.evaluationForm.get('specifiqueCommentaires')}


  submit(evaluationForm: FormGroupDirective){
    if (this.evaluationForm.valid && this.matricule) {
      // console.log(JSON.stringify(this.evaluationForm.value));
      const formData = this.evaluationForm.value;

      // Post the form data to the API
      this.http.post(`http://localhost:5234/api/EmpEva/Submit`, formData).subscribe(
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


