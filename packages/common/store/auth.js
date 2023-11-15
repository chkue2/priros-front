import {defineStore} from 'pinia';
import {POST, GET_AUTH} from '~/composables/useApi.js'

const accessTokenKey = 'access_token';
const refreshTokenKey = 'refresh_token';
const userSessionKey = 'auth-user';


function saveToken(accessToken, refreshToken) {
    sessionStorage.setItem(accessTokenKey, JSON.stringify({token: accessToken}));
    localStorage.setItem(refreshTokenKey, JSON.stringify({token: refreshToken}));
}

function removeToken() {
    sessionStorage.removeItem(accessTokenKey);
    localStorage.removeItem(refreshTokenKey);
}


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
                await POST('/auth/login', credentials).then((response) => {
                    if (response && response.data) {
                        if (typeof window !== 'undefined') {
                            saveToken(response.data.token, response.data.refreshToken);
                        }
                    }
                });


                return true;
            } catch (error) {
                console.log(error);

                return false;
            }
        },
        async requestRefreshTokenUpdate() {
            try {
                const refreshToken = JSON.parse(localStorage.getItem(refreshToken));
                if (refreshToken) {
                    const response = await POST('/auth/refresh', {
                        "refreshToken": refreshToken.token
                    });
                    if (response && response.data) {
                        saveToken(response.data.token, response.data.refreshToken);
                    }

                    return true;
                } else {

                    throw new Error('refresh Token 없음');
                }
            } catch (error) {
                console.error("refresh 갱신 실패");
                return false;
            }
        },
        logout() {
            this.user = null;
            if (typeof window !== 'undefined') {
                sessionStorage.removeItem(userSessionKey);
                removeToken();
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

export {accessTokenKey, refreshTokenKey};