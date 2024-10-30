export default ({ app }) => {
  window.receiveFCMToken = (token) => {
    window.localStorage.setItem("priros-fcm-token", token);
  };
};
