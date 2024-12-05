export interface FicheFonctionModel {
    idFf: number;
    nameFf?: string;
    contentType?: string; 
    fileData?: File;
    mresp?: number;
}


export interface UpdateFfModel {
    IdFf: number;
    FileData?: File;
    Mresp?: number;
}

export class UploadedFiche {
    FileData?: File;
    mresp?: number;  // Represents the file selected by the user
  }