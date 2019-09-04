export interface IAuthentication {
    token: string;
    message: string;
}

export class Authentication implements IAuthentication{
    constructor(
        public token: string,
        public message: string){}
}