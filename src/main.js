import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";
import "./sass/main.scss";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
