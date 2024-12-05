import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';
import { AuthService } from '../../../services/auth.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-viewer',
  templateUrl: './excel-viewer.component.html',
  styleUrls: ['./excel-viewer.component.css']
})
export class ExcelViewerComponent implements OnInit {
  selectedFile: File | null = null;
  idIp: number = 0;
  data: any[][] = [];
  approvalStatus: boolean[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private fileService: FileService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUserIntegrationPlan();
  }





  
  loadUserIntegrationPlan(): void {
    const mat = this.authService.getMatFromToken();
    console.log('MAT from token:', mat); // Debugging
    if (mat) {
      this.authService.getUserByMat(mat).subscribe(
        user => {
          console.log('User details:', user); // Debugging
          this.idIp = user.idIp ?? 0;
          if (this.idIp) {
            this.getFile();
          } else {
            this.error = 'User does not have an associated Integration Plan.';
          }
        },
        err => {
          this.error = 'Error retrieving user details.';
          console.error('Error fetching user details:', err); // Debugging
        }
      );
    } else {
      this.error = 'Invalid MAT token.';
    }
  }

  getFile(): void {
    this.loading = true;
    this.error = null;
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
            console.log('Excel Data:', this.data); // Debugging

            this.approvalStatus = this.data.slice(1).map(row => row.length > 1 ? false : false);
            this.loading = false;
          };
          reader.readAsBinaryString(response);
        },
        error => {
          this.error = 'Error retrieving file.';
          console.error('Error fetching file:', error); // Debugging
          this.loading = false;
        }
      );
    } else {
      this.error = 'Invalid Integration Plan ID.';
      this.loading = false;
    }
  }

  approveRow(rowIndex: number) {
    if (this.data[rowIndex + 1].length > 1) {
      this.approvalStatus[rowIndex] = !this.approvalStatus[rowIndex];
    }
  }

  onSubmit() {
    const formData = this.data.slice(1).map((row, i) => ({
      row: row,
      approved: this.approvalStatus[i]
    }));

    console.log('Form Submitted:', formData);

    // Handle form submission
  }
}
