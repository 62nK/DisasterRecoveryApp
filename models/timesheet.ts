export interface ITimeSheet{
    siteCode: number,
    contractorName: string,
    date: Date,
    entryCodes: [String]
}

export class TimeSheet implements ITimeSheet{
    constructor( 
        public siteCode: number,
        public contractorName: string,
        public date: Date,
        public entryCodes: [String]
    ){}
}