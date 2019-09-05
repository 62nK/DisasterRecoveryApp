export interface IJobCode {
    code : string;
    description : string;
    hourlyRate : number;
    maxDailyHours: number;
    _id? : string;
}

export class JobCode implements IJobCode {
    constructor(
        public code: string,
        public description : string,
        public hourlyRate : number,
        public maxDailyHours: number,
        public _id?: string){}
}