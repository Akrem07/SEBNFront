import { Component } from '@angular/core';
import { FileService } from '../../../services/file.service';
import { HttpClient } from '@angular/common/http';

import * as XLSX from 'xlsx';


@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent {
  selectedFile: File | null = null;
  idIp: number = 0;
  nameIp: string = '';
  fileUrl: string | null = null;

  data: any[][] = [];
  approvalStatus: boolean[] = [];


  constructor(private fileService: FileService, private http: HttpClient) {}

  // onFileChange(event: any): void {
  //   this.selectedFile = event.target.files[0];
  // }

  // uploadFile(): void {
  //   if (!this.selectedFile) {
  //     alert('Please select a file first.');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('IdIp', this.idIp.toString());
  //   formData.append('NameIp', this.nameIp);
  //   formData.append('file', this.selectedFile);

  //   this.http.post('http://localhost:5234/api/IntegrationPlan/upload', formData)
  //     .subscribe({
  //       next: (response) => console.log('Upload successful', response),
  //       error: (error) => console.error('Error uploading file', error)
  //     });
  // }



  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadFile(): void {
    if (this.selectedFile && this.idIp && this.nameIp) {
      const formData: FormData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('id', this.idIp.toString());
      formData.append('name', this.nameIp);
  
      this.http.post('http://localhost:5234/api/IntegrationPlan/upload', formData)
        .subscribe({
          next: (response) => {
            console.log('File uploaded successfully', response);
            alert('File uploaded and processed successfully.');
          },
          error: (error) => {
            console.error('Error uploading file:', error);
            alert('Failed to upload file.');
          }
        });
    } else {
      alert('Please select a file and enter both ID and Name.');
    }
  }
  

  // uploadFile(): void {
  //   if (this.selectedFile && this.idIp && this.nameIp) {
  //     const formData: FormData = new FormData();
  //     formData.append('file', this.selectedFile);
  //     formData.append('id', this.idIp.toString());
  //     formData.append('name', this.nameIp);

  //     this.http.post('http://localhost:5234/api/IntegrationPlan/upload', formData)
  //       .subscribe({
  //         next: (response) => {
  //           console.log('File uploaded successfully', response);
  //           alert('File uploaded and processed successfully.');
  //         },
  //         error: (error) => {
  //           console.error('Error uploading file:', error);
  //           alert('Failed to upload file.');
  //         }
  //       });
  //   } else {
  //     alert('Please select a file and enter both ID and Name.');
  //   }
  // }


  getFile(): void {
    if (this.idIp) {
      this.fileService.getFile(this.idIp).subscribe(
        (response: Blob) => {
          const reader: FileReader = new FileReader();
          reader.onload = (e: any) => {
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];

            this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });

            // Initialize approval status array with only rows that have more than one cell
            this.approvalStatus = this.data.slice(1).map(row => row.length > 1 ? false : false);
          };
          reader.readAsBinaryString(response);
        },
        error => {
          console.error('Error retrieving file', error);
          alert('Error retrieving file.');
        }
      );
    }
  }

  approveRow(rowIndex: number) {
    // Toggle the approval status of the entire row if it has more than one cell
    if (this.data[rowIndex + 1].length > 1) {
      this.approvalStatus[rowIndex] = !this.approvalStatus[rowIndex];
    }
  }

  onSubmit() {
    // Collect the approval status and prepare the form data for submission
    const formData = this.data.slice(1).map((row, i) => ({
      row: row,
      approved: this.approvalStatus[i]
    }));

    console.log('Form Submitted:', formData);

    // Here, you can send the formData to a server or handle it as needed
  }

}
