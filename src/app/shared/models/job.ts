export interface IJob {
    code : string;
    description : string;
    hourlyRate : number;
    maxDailyHours: number;
}

export class Job implements IJob {
    constructor(public code: string,
        public description : string,
        public hourlyRate : number,
        public maxDailyHours: number){}
}