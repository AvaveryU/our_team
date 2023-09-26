export type ArrayToUnion<T extends any[]> = T extends (infer A)[] ? A : never;

export interface IUser {
    readonly avatar?: string
    readonly email: string
    readonly first_name: string
    readonly id: number
    readonly last_name: string
}

interface TSupport {
    readonly url: string
    readonly text: string
}

export interface IUserProfile {
    readonly data: IUser
    readonly support: TSupport
}

export type TListUsers = {
    readonly page: number
    readonly per_page: number
    readonly total: number
    readonly total_pages: number
    readonly data: Array<IUser>
    readonly support?: TSupport
};

export interface IUserRegistrationSuccess {
    readonly token: string;
    readonly id: string;
}

export interface IUserLoginSuccess {
    readonly token: string;
}

export interface IUserRegistration {
    readonly email: string;
    readonly username: string;
}