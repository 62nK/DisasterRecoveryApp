export interface IUser {
    username: string;
    password: string;
    role: number; // ADMIN/REGULAR
  }

  export class User implements IUser{
      constructor(
          public username: string,
          public password: string,
          role: number){}
      
  }