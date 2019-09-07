import { IEntry } from './entry';

export interface ITimeSheet{
    code: string,
    contractorName: string,
    date: Date,
    entries: Array<IEntry>,
    approved: boolean,
}

export class TimeSheet implements ITimeSheet{
    constructor( 
        public code: string,
        public contractorName: string,
        public date: Date,
        public entries: Array<IEntry>,
        public approved: boolean,
    ){}
}