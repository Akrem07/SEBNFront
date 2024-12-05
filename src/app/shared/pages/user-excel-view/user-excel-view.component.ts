import { Component, OnInit } from '@angular/core';
import { ExcelDataService } from '../../../services/excel-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-excel-view',
  templateUrl: './user-excel-view.component.html',
  styleUrls: ['./user-excel-view.component.css'],
})


export class UserExcelViewComponent implements OnInit {
  files: any[] = [];
  data: any[][] = [];
  approvalStatus: boolean[] = [];
  selectedFileId: number | null = null;
  file: File | null = null;

  constructor(private excelService: ExcelDataService) {}

  ngOnInit(): void {
    this.loadExcelFiles();
  }

  loadExcelFiles(): void {
    this.excelService.getExcelFiles().subscribe(
      (response: any[]) => {
        this.files = response;
      },
      (error: any) => {
        console.error('Error loading Excel files', error);
      }
    );
  }

  loadExcelData(fileId: number): void {
    this.selectedFileId = fileId;
    this.excelService.getExcelFileById(fileId).subscribe(
      (response: any) => {
        const rows = response.split(','); // Assuming the RowData is stored as a comma-separated string
        this.data = this.convertTo2DArray(rows);
        this.approvalStatus = new Array(this.data.length - 1).fill(false);
      },
      (error: any) => {
        console.error('Error loading Excel data', error);
      }
    );
  }

  convertTo2DArray(rows: string[]): any[][] {
    const numColumns = Math.ceil(rows.length / (this.data.length > 0 ? this.data[0].length : 1));
    const array2D: any[][] = [];
    for (let i = 0; i < rows.length; i += numColumns) {
      array2D.push(rows.slice(i, i + numColumns));
    }
    return array2D;
  }

  approveRow(rowIndex: number): void {
    this.approvalStatus[rowIndex] = !this.approvalStatus[rowIndex];
  }

  onSubmit(): void {
    const formData = this.data.slice(1).map((row, i) => ({
      row: row,
      approved: this.approvalStatus[i]
    }));

    console.log('Form Submitted:', formData);
  }

  // Method to handle file selection
  onFileChange(event: any): void {
    this.file = event.target.files[0];
  }

  // Method to handle file upload
  onUpload(): void {
    if (this.file) {
      this.excelService.uploadExcel(this.file).subscribe(
        (response) => {
          console.log('Upload successful', response);
          this.loadExcelFiles(); // Reload the file list after upload
        },
        (error) => {
          console.error('Upload failed', error);
        }
      );
    } else {
      console.error('No file selected.');
    }
  }
}
