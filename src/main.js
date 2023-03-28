import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

if (
  window.location.protocol == "http:" &&
  window.location.host.indexOf("khe.io") >= 0
) {
  window.location.href = window.location.href.replace("http:", "https:");
}

createApp(App).use(router).mount("#app");
