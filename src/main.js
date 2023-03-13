import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/router.js";
import store from "./store/store.js";
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseBadge from "@/components/ui/BaseBadge.vue";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";
import BaseDialog from "@/components/ui/BaseDialog.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.mount("#app");
