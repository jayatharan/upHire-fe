
export interface User {
    id?:string;
    email: string;
    name: string;
    password?: string;
    createdAt: Date;
    updateAt: Date;
}

export interface Session {
    id?:string;
    user: string;
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}


