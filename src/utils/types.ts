export type ArrayToUnion<T extends any[]> = T extends (infer A)[] ? A : never;

export interface IUser {
    avatar?: string
    email: string
    first_name: string
    id: number
    last_name: string
}

interface TSupport {
    url: string
    text: string
}

export interface IUserProfile {
    data: IUser
    support: TSupport
}

export type TListUsers = {
    readonly page: number
    readonly per_page: number
    readonly total: number
    readonly total_pages: number
    readonly data: Array<IUser>
    readonly support?: TSupport
};