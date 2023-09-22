import { ArrayToUnion } from "../../utils/types";

export type UsersActions = ArrayToUnion<
    [
        {
            type: "SET_USERS";
            users: Array<IUser>
            page: number
            totalPages: number
        },
        {
            type: "SET_ERROR";
            error: boolean
        },
    ]
>

export interface IUser {
    avatar?: string
    email: string
    first_name: string
    id: number
    last_name: string
}

interface IUsersState {
    users: Array<IUser>
    page: number
    totalPages: number
    error: boolean
}

const usersState: IUsersState = {
    users: [],
    page: 1,
    totalPages: 0,
    error: false,
}

export const userReducer = (state = usersState, action: UsersActions): IUsersState => {
    switch (action.type) {
        case "SET_USERS": return { ...state, users: [...state.users, ...action.users], page: action.page, totalPages: action.totalPages };
        case "SET_ERROR": return { ...state, error: action.error };
        default: return state;
    }
};