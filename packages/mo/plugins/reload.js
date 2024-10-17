export default defineNuxtPlugin((nuxtApp) => {
  const router = nuxtApp.$router;

  router.beforeEach(() => {
    window.addEventListener(
      "pageshow",
      function (e) {
        const navigation = window.performance.getEntriesByType("navigation");
        if (
          e.persisted ||
          (navigation.length && navigation[0].type === "back_forward")
        ) {
          window.location.reload();
        }
      },
      false
    );
  });
});
