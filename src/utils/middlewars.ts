import { UsersActions } from "../store/reducers/users";
import { store } from "../store/store";
import { getUserProfile, getUsers, postLoginUser, postLogoutUser, postRegistration } from "./api";

// получение списка пользователей
export const getUsersData = (page?: number) => {
    getUsers(page)
        .then((result) => {
            store.dispatch<UsersActions>({ type: "SET_USERS", users: result.data, page: result.page, totalPages: result.total_pages });
        })
        .catch((error) => {
            store.dispatch<UsersActions>({ type: "SET_ERROR", error: `getUsersData: ${error}` });
            throw new Error(`error: ${error}`);
        })
};

// получение инфо о профайле
export const getProfile = (userId: number | string) => {
    getUserProfile(userId)
        .then((result) => {
            store.dispatch<UsersActions>({ type: "SET_PROFILE", currentProfile: result.data, });
        })
        .catch((error) => {
            store.dispatch<UsersActions>({ type: "SET_ERROR", error: `getProfile: ${error}` });
            throw new Error(`error: ${error}`);
        })
};

// регистрация нового пользователя
export const postNewUser = (password: string, username: string, email: string) => {
    postRegistration(password, email)
        .then((result) => {
            localStorage.setItem("token", result.token);
            store.dispatch<UsersActions>({ type: "USER_REGISTER_SUCCESS", email: email });
        })
        .catch((error) => {
            store.dispatch<UsersActions>({ type: 'USER_REGISTER_FAILED', error: `postNewUser: ${error}` });
        }
        );
};

// выход из аккаунта
export const logOutUser = () => {
    postLogoutUser()
        .then(() => {
            localStorage.removeItem("token");
            store.dispatch<UsersActions>({ type: "LOGOUT_USER_SUCCESS" });
        })
        .catch((error) => {
            store.dispatch<UsersActions>({ type: 'LOGOUT_USER_FAILED', error: `logOutUser: ${error}` });
        }
        );
};

// вход в аккаунт
export const loginUser = (password: string, email: string) => {
    return postLoginUser(password, email)
        .then((result) => {
            localStorage.setItem("token", result.token);
            store.dispatch<UsersActions>({ type: "LOGIN_USER_SUCCESS", email: email });
        })
        .catch((error) => {
            store.dispatch<UsersActions>({ type: 'LOGIN_USER_FAILED', error: `loginUser: ${error}` });
        }
        );
};