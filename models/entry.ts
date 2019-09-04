export interface Ientry {
    code: string;
    hoursWorked: Number;
    total: Number;
    type: string
}

export class Entry implements Ientry {
    constructor(
        public code : string,
        public hoursWorked : number,
        public total : number,
        public type : string
    ){}
}
