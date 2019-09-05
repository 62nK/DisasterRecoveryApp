export interface IJobCode {
    _id : string;
    code : string;
    description : string;
    hourlyRate : number;
    maxDailyHours: number;
}

export class JobCode implements IJobCode {
    constructor(
        public _id : string,
        public code: string,
        public description : string,
        public hourlyRate : number,
        public maxDailyHours: number){}
}