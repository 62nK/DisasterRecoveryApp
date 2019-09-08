export const ADMIN = 2189371;
export const USER = 8965142;

export const APIserver = {
    protocol: "http",
    host: "localhost",
    port: "3001",
    getUrl(){return this.protocol+"://"+this.host+":"+this.port;}
}

export const Apis = {
    userapis: "/userapis",
    machinecodeapis: "/machinecodeapis",
    jobcodeapis: "/jobcodeapis",
    timecardapis: "/timesheetapis",

    // Api methods
    signin: "/signin",
    create: "/create",
    update: '/update/',
    getAll: "/list",
    getbyId: "/",
    removeById: "/remove/"
}

export const defaultAdmin = {
    username: "admin",
    password: "1234",
    role: ADMIN
}
export const defaultUser = {
    username: "user",
    password: "1234",
    role: USER
}