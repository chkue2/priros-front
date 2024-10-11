import CrytoJS from "crypto-js";

/**
 *
 * @param {string} secretKey
 * @param {string} key
 * @param {object} val
 */
export const useEncrypted = (secretKey, key, val) => {
  const enc = CrytoJS.AES.encrypt(JSON.stringify(val), secretKey).toString();
  if (typeof window !== "undefined") {
    window.localStorage.setItem(key, enc);
  }
};

/**
 *
 * @param {string} secretKey
 * @param {string} key
 * @returns object
 */
export const useDecrypted = (secretKey, key) => {
  const hash = window.localStorage.getItem(key);
  if (hash) {
    const dec = CrytoJS.AES.decrypt(hash, secretKey);
    return JSON.parse(dec.toString(CrytoJS.enc.Utf8));
  } else {
    return undefined;
  }
};
