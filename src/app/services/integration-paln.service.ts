// integration-plan.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IntegrationPlanService {
  private apiUrl = 'http://localhost:5234/api/IntegrationPlan';

  constructor(private http: HttpClient) {}

  getExcelFile(mat: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/user/${mat}/file`, {
      responseType: 'blob'
    });
  }
}
