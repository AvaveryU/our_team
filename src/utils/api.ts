import { baseUrl } from "./constants";
import { TListUsers } from "./types";

export function checkResponse<T>(response: Response): Promise<T> {
    return response.ok ? response.json() : response.json().then((error) => Promise.reject(error));
}

// получение списка пользователей
export const getUsers = async (page?: number) => {
    const urlUsers = `users?page=${page ?? 1}`;
    const response = await fetch(baseUrl + urlUsers, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
    });
    return checkResponse<TListUsers>(response);
};