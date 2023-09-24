import { ArrayToUnion, IUser } from "../../utils/types";

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
            error: string
        },
        {
            type: "SET_PROFILE";
            currentProfile: IUser | null
        },
    ]
>

interface IUsersState {
    users: Array<IUser>
    currentProfile: IUser | null
    page: number
    totalPages: number
    error: string
}

const usersState: IUsersState = {
    users: [],
    currentProfile: null,
    page: 1,
    totalPages: 0,
    error: '',
}

export const userReducer = (state = usersState, action: UsersActions): IUsersState => {
    switch (action.type) {
        case "SET_USERS": return { ...state, users: [...state.users, ...action.users], page: action.page, totalPages: action.totalPages };
        case "SET_ERROR": return { ...state, error: action.error };
        case "SET_PROFILE": return { ...state, currentProfile: action.currentProfile };
        default: return state;
    }
};