import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfFileService {
  private apiUrl = 'http://localhost:5234/api/FicheFonction/GetficheFonction';

  constructor(private http: HttpClient) {}

  getPdf(idFf: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${idFf}`, { responseType: 'blob' });
  }

  
}
