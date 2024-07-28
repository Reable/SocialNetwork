export interface LoginUser{
    login: string,
    password: string
}
export interface ResponseToken{
    token: string,
}

export interface RegisterUser{
    email: string,
    password: string,
    name?:string
    date_birth?:string
}