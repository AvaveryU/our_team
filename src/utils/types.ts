import { IUser } from "../store/reducers/users";

export type ArrayToUnion<T extends any[]> = T extends (infer A)[] ? A : never;

type TSupport = {
    url: string
    text: string
}

export type TListUsers = {
    readonly page: number
    readonly per_page: number
    readonly total: number
    readonly total_pages: number
    readonly data: Array<IUser>
    readonly support?: TSupport
};