import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private apiUrl = 'https://your-api-url/api/EmpEva';

  constructor(private http: HttpClient) {}

  submitEvaluation(evaluationData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, evaluationData);
  }
}
