export interface IAuthentication {
    token?: string;

    isAdmin(): boolean;
}

export class Authentication implements IAuthentication{
    constructor(
        public token: string){}

    isAdmin(){
        return true;
    }
}