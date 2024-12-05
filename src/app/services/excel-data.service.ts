import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Adjust the path if needed

@Injectable({
  providedIn: 'root'
})
export class ExcelDataService {

  private baseUrl = '/IntegrationPlan'; // Base URL segment for the API

  constructor(private http: HttpClient) {}

  // Upload Excel file
  public uploadExcel(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(`${environment.apiUrl}/IntegrationPlan/upload`, formData);

  }


  // Get Excel data
  public getExcelData(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/${this.baseUrl}`);
  }

  // Get list of Excel files
public getExcelFiles(): Observable<any[]> {
  return this.http.get<any[]>(`${environment.apiUrl}/${this.baseUrl}/files`);
}

// Get a specific Excel file by ID
public getExcelFileById(id: number): Observable<any> {
  return this.http.get<any>(`${environment.apiUrl}/${this.baseUrl}/files/${id}`);
}

}
