export interface RespEvaModel {
    idReva: number; 
    forces?: string ;
    aspects?: string ;
    adaptation: string   ;
    autonomy :string  ;
    quality : string  ;
    goals: string  ;
    others: string  ;
    specifiqueCommentaire1?: string  ;
    evaluation1: string ;
    probationReussie?: string;
    evaluation: string  ;
    probationNonReussie?: string; 
    mat: number; // Matricule of the user who submitted the evaluation
  }
  