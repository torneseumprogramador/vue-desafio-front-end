import API from "../config/API";

const KEY_LOGIN = "desafio-vue-login";

class LoginService {
    static async login(login) {
        const response = await API.post(`/login`, login);
        return await response.data
    }

    static setLocalStorage(token) {
        const minutosExpiracao = 22*60; // token expira em 22 horas
        const now = new Date();
        const item = {
            value: token,
            expiry: now.getTime() + minutosExpiracao * 60000, // Convert minutes to milliseconds
        };
        localStorage.setItem(KEY_LOGIN, JSON.stringify(item));
    }

    static getToken() {
        const itemStr = localStorage.getItem(KEY_LOGIN);
        if (!itemStr) {
            return null;
        }

        const item = JSON.parse(itemStr);
        const now = new Date();

        if (now.getTime() > item.expiry) {
            localStorage.removeItem(KEY_LOGIN);
            return null;
        }

        return item.value;
    }

    static clearLocalStorage() {
        localStorage.removeItem(KEY_LOGIN);
    }

    static tokenValido() {
        const token = LoginService.getToken();
        return token ? true : false;
    }
}

export default LoginService;