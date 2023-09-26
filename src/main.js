// Default Vue
import { createApp } from "vue";

// Tailwind CSS
import "@/assets/css/index.css";

// Base Layout
import App from "./App.vue";

// Create Vue App
const app = createApp(App);

// Base Components
import registerComponents from "./components/base";
registerComponents(app);

// Pinia
import { createPinia } from "pinia";
app.use(createPinia());

// Vue Router
import router from "./routes";
app.use(router);

// Mount Vue App
app.mount("#app");
