export interface IUser{
    email: string
    password: string
    name: string
    surname: string
    role: string
}

export interface MailText {
    from: string,
    to: string,
    subject: string,
    html: string
}