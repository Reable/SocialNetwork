export interface IDataAuthorization {
    email: string
    password: string
}

export interface IDataRegistration {
    email: string
    password: string
    name: string
    surname: string
    role: string
}

export interface IUser extends IDataRegistration{
    id: number
}

export interface IConnectDatabase {
    client: string | undefined
    connection: {
        host: string | undefined,
        port: any,
        user: string | undefined,
        password: string | undefined,
        database: string | undefined
    }
}
