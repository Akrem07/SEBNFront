import { Component, OnInit } from '@angular/core';
import { PdfFileService } from '../../../services/pdf-file.service';
import { AuthService } from '../../../services/auth.service';
import { UserModel } from '../../../model/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  pdfUrl: string | ArrayBuffer | null = null;
  pdfFileName: string | null = null;

  private apiUrl = 'http://localhost:5234/api/FicheFonction';

  constructor(
    private pdfFileService: PdfFileService,
    private authService: AuthService,
    private http: HttpClient
  ) {}


  getPdf(idFf: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/GetficheFonction/${idFf}`, {
      responseType: 'blob' // This ensures the response is treated as binary data
    });
  }

  
  ngOnInit(): void {
    // Fetch the current user's MAT from the token
    const mat = this.authService.getMatFromToken();
    if (mat !== null) {
      this.fetchFicheByMat(mat);
    } else {
      console.error('No MAT found in token.');
    }
  }

  private fetchFicheByMat(mat: number): void {
    this.authService.getFicheByMat(mat).subscribe(
      (fiche: UserModel) => {
        if (fiche.idFf !== undefined) {
          this.fetchPdf(fiche.idFf);
        } else {
          console.error('No associated Fiche Fonction found for this MAT.');
        }
      },
      (error: any) => {
        console.error('Error fetching Fiche Fonction by MAT', error);
      }
    );
  }

  // private fetchPdf(idFf: number): void {
  //   this.pdfFileService.getPdf(idFf).subscribe(
  //     blob => {
  //       this.pdfFileName = `fiche_fonction_${idFf}.pdf`; // You can customize the filename
  //       const url = window.URL.createObjectURL(blob);
  //       this.pdfUrl = url;
  //     },
  //     error => {
  //       console.error('Error fetching PDF', error);
  //     }
  //   );
  // }


  private fetchPdf(idFf: number): void {
    this.pdfFileService.getPdf(idFf).subscribe(
      blob => {
        if (blob && blob.size > 0) { // Ensure the blob has content
          this.pdfFileName = `fiche_fonction_${idFf}.pdf`;
          const url = window.URL.createObjectURL(blob);
          this.pdfUrl = url;
        } else {
          console.error('The PDF blob is empty or invalid.');
        }
      },
      error => {
        console.error('Error fetching PDF', error);
      }
    );
  }
  
  
}
