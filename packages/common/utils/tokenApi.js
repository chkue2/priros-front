const accessTokenKey = 'access_token';
const refreshTokenKey = 'refresh_token';

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
  },
  clearAll: () => {
      tokenApi.clear()
      localStorage.removeItem(userSessionKey);
  }
};