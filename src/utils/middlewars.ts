import { UsersActions } from "../store/reducers/users";
import { store } from "../store/store";
import { getUsers } from "./api";

// получение списка пользователей
export const getUsersData = (page?: number) => {
    getUsers(page)
        .then((result) => {
            store.dispatch<UsersActions>({ type: "SET_USERS", users: result.data, page: result.page, totalPages: result.total_pages });
            console.log(result)
        })
        .catch((error) => {
            store.dispatch<UsersActions>({ type: "SET_ERROR", error: true });
            throw new Error(`error: ${error}`);
        }
        )

};