import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FicheFonctionService {
  private apiUrl = 'http://localhost:5234/api/FicheFonction'; // Update URL as needed

  constructor(private http: HttpClient) {}


  getFile(idFf: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/GetficheFonction/${idFf}`, {
      responseType: 'blob'
    });
  }

  
}
