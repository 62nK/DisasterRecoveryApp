export interface IEntry {
    code: string;
    hoursWorked: number;
    total: number;
    type: string
}

export class Entry implements IEntry {
    constructor(
        public code : string,
        public hoursWorked : number,
        public total : number,
        public type : string
    ){}
}
