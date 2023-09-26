export const baseUrl = 'https://reqres.in/api/';
export const countPages = 1;

export const pathnames = {
    home: '/',
    team: '/team',
    notFound: '/notFound',
    user: '/team/:id',
    login: '/login',
}

export const emailReg = /(^|\s+)([A-Za-z0-9_\-\\.]+)@([A-Za-z0-9_\-]{1,}\.[A-Za-z]{2,})(\s+){0,}$/
export const loginReg = /^[A-Za-zА-Яа-я]+$/
export const withoutSpaceReg = /\s/g

export const textError = 'Ошибка'