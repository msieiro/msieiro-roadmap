import "@mdi/font/css/materialdesignicons.min.css";
import Vue from "vue";
import {
  VApp,
  VAppBar,
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VCardTitle,
  VChip,
  VCol,
  VContainer,
  VDivider,
  VFooter,
  VIcon,
  VImg,
  VList,
  VListItemTitle,
  VMain,
  VMenu,
  VRow,
  VSpacer,
  VTimeline,
  VTimelineItem,
  VToolbarTitle,
} from "vuetify/lib";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify, {
  components: {
    VApp,
    VMain,
    VCard,
    VFooter,
    VCol,
    VMenu,
    VBtn,
    VList,
    VListItemTitle,
    VDivider,
    VAppBar,
    VToolbarTitle,
    VSpacer,
    VIcon,
    VRow,
    VContainer,
    VTimeline,
    VTimelineItem,
    VCardTitle,
    VCardText,
    VImg,
    VChip,
    VCardActions,
  },
});

const opts = {};

export default new Vuetify(opts);
