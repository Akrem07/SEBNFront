import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = 'http://localhost:5234/api/IntegrationPlan'; // Update URL as needed

  constructor(private http: HttpClient) {}

  uploadFile(idIp: number, nameIp: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('idIp', idIp.toString());
    formData.append('nameIp', nameIp);
  
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }
  

  getFile(idIp: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/GetFile/${idIp}`, {
      responseType: 'blob'
    });
  }




}
