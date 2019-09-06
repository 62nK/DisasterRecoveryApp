export const ADMIN = 2189371;
export const USER = 8965142;

export interface IUser {
    username: string;
    password: string;
    role?: number; // ADMIN/REGULAR
  }

  export class User implements IUser{
      constructor(
          public username: string,
          public password: string,
          public role?: number){}
  }