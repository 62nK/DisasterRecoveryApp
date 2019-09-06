import { User } from './user';

export interface IAuthentication {
    token: string;
}

export class Authentication implements IAuthentication{

    constructor(
        public token: string){}
}