export interface IEntry {
    code: string;
    hours: number;
    total: number;
    type: string
}

export class Entry implements IEntry {
    constructor(
        public code : string,
        public hours : number,
        public total : number,
        public type : string
    ){}
}
