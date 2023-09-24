export const baseUrl = 'https://reqres.in/api/';
export const countPages = 1;

export const pathnames = {
    home: '/',
    team: '/team',
    notFound: '/notFound',
    user: '/team/:id'
}

export const emailReg = /(^|\s+)([A-Za-z0-9_\-\\.]+)@([A-Za-z0-9_\-]{1,}\.[A-Za-z]{2,})(\s+){0,}$/
export const loginOrEmailReg = /(^|\s+)([A-Za-z0-9_\-\\.]+)(@{0,1}[A-Za-z0-9_\-]{1,}\.[A-Za-z]{2,}){0,}(\s+){0,}$/
export const withoutSpaceReg = /\s/g