import Cookies from 'js-cookie'

export function setCookie() {
    Cookies.set('myCookie', 'value', {
        secure: true,
        sameSite: 'strict'
    })
}
