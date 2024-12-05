export interface UserModel {
    id: number;
    mat: number;
    firstName?: string;
    lastName?: string;
    password?: string;
    idDep: number;
    idR: number;
    idFf?: number;
    idIp?: number;
    matResp?: number;

  }
  
  export interface AddUserModel {
    id: number;
    mat: number;
    firstName?: string;
    lastName?: string;
    password?: string;
    idDep: number;
    idR: number;
  }

  export interface AttributePlanModel {
    mat: number;
    idIp: number;
  }

  export interface FicheModel {
    idFf: number;
  }
  
  export interface AttributeFicheModel {
    mat: number;
    idFf: number;
  }
  
