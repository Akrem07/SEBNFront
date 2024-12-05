// import { Component } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// @Component({
//   selector: 'app-excel-upload',
//   templateUrl: './excel-upload.component.html',
//   styleUrls: ['./excel-upload.component.css']
// })
// export class ExcelUploadComponent {
//   selectedFile: File | null = null;
//   uploadSuccess = false;
//   uploadError = false;

//   constructor(private http: HttpClient) {}

//   onFileSelected(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length > 0) {
//       this.selectedFile = input.files[0];
//       this.uploadSuccess = false;
//       this.uploadError = false;
//     }
//   }

//   onUpload(): void {
//     if (this.selectedFile) {
//       const formData = new FormData();
//       formData.append('file', this.selectedFile);

//       this.http.post('/api/integrationplan/upload', formData)
//         .subscribe({
//           next: () => {
//             this.uploadSuccess = true;
//             this.uploadError = false;
//           },
//           error: (error: HttpErrorResponse) => {
//             console.error('Upload error:', error);
//             this.uploadSuccess = false;
//             this.uploadError = true;
//           }
//         });
//     }
//   }
// }



import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-upload',
  templateUrl: './excel-upload.component.html',
  styleUrls: ['./excel-upload.component.css']
})
export class ExcelUploadComponent {
  data: any[][] = [];
  approvalStatus: boolean[] = [];

  onFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

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
    reader.readAsBinaryString(target.files[0]);
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




