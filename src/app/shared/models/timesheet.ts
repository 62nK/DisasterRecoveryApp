import { IEntry } from './entry';

export interface ITimeSheet{
    code: number,
    contractorName: string,
    date: Date,
    entries: [IEntry],
    approved: boolean,
}

export class TimeSheet implements ITimeSheet{
    constructor( 
        public code: number,
        public contractorName: string,
        public date: Date,
        public entries: [IEntry],
        public approved: boolean,
    ){}
}