interface User {
    id:number,
    name:string,
    role:string,
    email:string,
    avatar?:string
}

interface UserState{
    userInfo:User | object
    pending:boolean
}

export type {User,UserState}