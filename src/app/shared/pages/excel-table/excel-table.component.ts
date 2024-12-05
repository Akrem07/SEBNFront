import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-table',

  templateUrl: './excel-table.component.html',
  styleUrl: './excel-table.component.css'
})
export class ExcelTableComponent {
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
