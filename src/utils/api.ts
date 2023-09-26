import { baseUrl } from "./constants";
import { IUserProfile, IUserRegistrationSuccess, TListUsers, IUserLoginSuccess } from "./types";

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

// получение информации о пользователе
export const getUserProfile = async (userId: number | string) => {
    const urlUsers = `users/${userId}`;
    const response = await fetch(baseUrl + urlUsers, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
    });
    return checkResponse<IUserProfile>(response);
};

// регистрация нового пользователя
export const postRegistration = async (password: string, email: string) => {
    const urlRegister = "register";
    const response = await fetch(baseUrl + urlRegister, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({ email: email, password: password }),
    });
    return checkResponse<IUserRegistrationSuccess>(response);
};

// выход
export const postLogoutUser = async () => {
    const urlLogout = "logout";
    const response = await fetch(baseUrl + urlLogout, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
    });
    return checkResponse(response);
};

// вход
export const postLoginUser = async (password: string, email: string) => {
    const urlLogin = "login";
    const response = await fetch(baseUrl + urlLogin, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email: email, password: password }),
    });
    return checkResponse<IUserLoginSuccess>(response);
};