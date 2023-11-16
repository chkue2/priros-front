import {defineStore} from 'pinia';
import {POST, GET_AUTH} from '~/composables/useApi.js'

const accessTokenKey = 'access_token';
const refreshTokenKey = 'refresh_token';
const userSessionKey = 'auth-user';

export const tokenApi = {
    setToken: (accessToken, refreshToken) => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem(accessTokenKey, JSON.stringify({token: accessToken}));
            localStorage.setItem(refreshTokenKey, JSON.stringify({token: refreshToken}));
        }
    },
    getAccessToken: () => {

        const tokenValue = sessionStorage.getItem(accessTokenKey);
        if (tokenValue) {
            return JSON.parse(tokenValue).token;
        }

        return null;
    },
    getRefreshToken: () => {
        const tokenValue = localStorage.getItem(refreshTokenKey);
        if (tokenValue) {
            return JSON.parse(tokenValue).token;
        }

        return null;
    },
    clear: () => {
        sessionStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
    }
};


export const useAuthStore = defineStore("auth", {

    state: () => ({
        user: null,
    }),
    actions: {
        initialize() {
            this.user = typeof window !== 'undefined' && JSON.parse(sessionStorage.getItem(userSessionKey)) || null;
        },
        async login(credentials) {
            try {
                const response = await POST('/auth/login', credentials);
                if (response && response.data) {
                    tokenApi.setToken(response.data.token, response.data.refreshToken);
                    return true;
                }

                return false;
            } catch (error) {
                console.log(error);
                return false;
            }
        },
        logout() {
            this.user = null;
            if (typeof window !== 'undefined') {
                sessionStorage.removeItem(userSessionKey);
                tokenApi.clear();
            }
            return true;
        },
        userProfile() {
            try {
                GET_AUTH('/user/profile').then((response) => {
                    if (response && response.data) {
                        this.user = {
                            profile: {
                                ...response.data
                            }
                        }
                        if (typeof window !== 'undefined') {
                            sessionStorage.setItem(userSessionKey, JSON.stringify(this.user));
                        }
                    }
                })
            } catch (e) {
                console.log(e)
                return false
            }
        }
    }
});

