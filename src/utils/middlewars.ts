import { UsersActions } from "../store/reducers/users";
import { store } from "../store/store";
import { getUserProfile, getUsers } from "./api";

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