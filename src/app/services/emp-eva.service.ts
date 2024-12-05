import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpEvaModel } from '../model/EmpEva.model'; // Adjust the import according to your model location

@Injectable({
  providedIn: 'root',
})
export class EmpEvaService {
  private apiUrl = 'http://localhost:5234/api/EmpEva'; // Backend URL

  constructor(private http: HttpClient) {}

  submitEvaluation(empEva: EmpEvaModel): Observable<EmpEvaModel> {
    return this.http.post<EmpEvaModel>(`${this.apiUrl}/Submit`, empEva);
  }

  getEvaluations(userMatricule: number): Observable<EmpEvaModel[]> {
    return this.http.get<EmpEvaModel[]>(`${this.apiUrl}/GetAllEvaluations`);
  }

  deleteEvaluation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/DeleteEvaluation/${id}`);
  }
}
