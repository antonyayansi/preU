import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import { router } from "./router";

import { PreTheme } from "./theme";
import 'primeicons/primeicons.css'
import "./style.css";

import App from "./App.vue";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .use(PrimeVue, {
    theme: {
        preset: PreTheme,
        options: {
            darkModeSelector: '.dark'
        }
    }
  })
  .mount("#app");
