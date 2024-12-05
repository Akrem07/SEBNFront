import { Component } from '@angular/core';
import { ExcelDataService } from '../../../services/excel-data.service'; // Ensure this import is correct
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-excel-upload',

  templateUrl: './admin-excel-upload.component.html',
  styleUrls: ['./admin-excel-upload.component.css']
})
export class AdminExcelUploadComponent {
  file: File | null = null;

  constructor(private excelService: ExcelDataService) {}

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }
  

  onUpload() {
    if (this.file) {
      this.excelService.uploadExcel(this.file).subscribe(
        (response) => {
          console.log('Upload successful', response);
          // Optionally, trigger a refresh of the view data or navigate
        },
        (error) => {
          console.error('Upload failed', error);
        }
      );
    } else {
      console.error('No file selected.');
    }
  }

  // Add more methods as needed
    


}
