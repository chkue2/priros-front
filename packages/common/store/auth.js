import { defineStore } from "pinia";
import { POST, GET_AUTH } from "~/composables/useApi.js";
import { tokenApi, userSessionKey } from "@priros/common/utils/tokenApi";
import { useEncrypted, useDecrypted } from "@priros/common/composables/aes256";

const $runtimeConfig = useRuntimeConfig();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    secretKey: $runtimeConfig.public.aesSecretKey,
  }),
  actions: {
    initialize() {
      this.user = useDecrypted(this.secretKey, userSessionKey) || null;
    },
    async login(credentials) {
      try {
        const response = await POST("/auth/login", credentials);
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
      if (typeof window !== "undefined") {
        tokenApi.clearAll();
      }
      return true;
    },
    userProfile() {
      try {
        GET_AUTH("/user/profile").then((response) => {
          if (response && response.data) {
            this.user = {
              profile: {
                ...response.data,
              },
            };
            if (typeof window !== "undefined") {
              window.localStorage.removeItem("auth-user");
              useEncrypted(this.secretKey, userSessionKey, this.user);
            }
          }
        });
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
});
