import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../../../services/master.service';
import { IntegrationPlanModel } from '../../../model/integrationplan.model';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.css']
})
export class UploadExcelComponent {
  uploadForm: FormGroup;
  progress: number = 0;
  message: string = '';

  constructor(private fb: FormBuilder, private masterService: MasterService) {
    this.uploadForm = this.fb.group({
      RowData: ['', Validators.required],
      NameIp: ['', Validators.required],
      IdIp: ['', Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadForm.patchValue({ RowData: file });
    }
  }

  uploadFile() {
    if (this.uploadForm.invalid) {
      this.message = "Please fill out the form correctly.";
      return;
    }

    const file = this.uploadForm.get('RowData')!.value;
    const name = this.uploadForm.get('NameIp')!.value;
    const id = this.uploadForm.get('IdIp')!.value;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('id', id.toString());

    this.masterService.uploadIntegrationPlan(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress && event.total) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = 'File uploaded successfully!';
      }
    }, error => {
      if (error.status === 400 && error.error.errors) {
        this.message = 'Failed to upload file: ' + Object.values(error.error.errors).flat().join(', ');
      } else {
        this.message = 'Failed to upload file.';
      }
    });
  }
}
