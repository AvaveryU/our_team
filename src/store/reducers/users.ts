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
        {
            type: "USER_REGISTER_SUCCESS";
            email: string
        },
        {
            type: "USER_REGISTER_FAILED";
            error: string
        },
        {
            type: "LOGOUT_USER_SUCCESS";
        },
        {
            type: "LOGOUT_USER_FAILED";
            error: string
        },
        {
            type: "LOGIN_USER_SUCCESS";
            email: string
        },
        {
            type: "LOGIN_USER_FAILED";
            error: string
        },
    ]
>

interface IUsersState {
    users: Array<IUser>
    // текущий пользователь
    user: {
        email: string
    };
    isRegisterChecked: boolean
    isLogin: boolean
    currentProfile: IUser | null
    page: number
    totalPages: number
    error: string
}

const usersState: IUsersState = {
    users: [],
    user: {
        email: "",
    },
    isRegisterChecked: false,
    isLogin: false,
    currentProfile: null, //текущий просматриваемый профиль
    page: 0,
    totalPages: 0,
    error: '',
}

export const userReducer = (state = usersState, action: UsersActions): IUsersState => {
    switch (action.type) {
        case "SET_USERS": return { ...state, users: [...state.users, ...action.users], page: action.page, totalPages: action.totalPages };
        case "SET_ERROR": return { ...state, error: action.error };
        case "SET_PROFILE": return { ...state, currentProfile: action.currentProfile };
        case 'USER_REGISTER_SUCCESS':
            return {
                ...state,
                isRegisterChecked: true,
                user: { email: action.email }
            };
        case 'USER_REGISTER_FAILED':
            return {
                ...state,
                isRegisterChecked: false,
                error: action.error,
            };
        case 'LOGOUT_USER_SUCCESS':
            return {
                ...state,
                user: { email: '' }
            };
        case 'LOGOUT_USER_FAILED':
            return {
                ...state,
                error: action.error,
            };
        case 'LOGIN_USER_SUCCESS':
            return {
                ...state,
                isLogin: true,
                user: { email: action.email }
            };
        case 'LOGIN_USER_FAILED':
            return {
                ...state,
                isLogin: false,
                error: action.error,
            };
        default: return state;
    }
};