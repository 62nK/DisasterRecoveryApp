export interface IMachineCode {
    code: string;
    description: string;
    hourlyRent: number;
    maxDailyHours: number;
}

export class MachineCode implements IMachineCode{
    constructor(
        public code :string,
        public description: string,
        public hourlyRent: number,
        public maxDailyHours: number){}
}