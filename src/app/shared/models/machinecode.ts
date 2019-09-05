export interface IMachineCode {
    code: string;
    description: string;
    hourlyRent: number;
    maxDailyHours: number;
    _id?: string;
}

export class MachineCode implements IMachineCode{
    constructor(
        public code :string,
        public description: string,
        public hourlyRent: number,
        public maxDailyHours: number,
        public _id?: string){}
}