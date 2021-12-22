<template>
  <v-footer padless color="black lighten-2">
    <v-col class="text-center white-text" cols="12">
      {{ $t("footer.sentence") }}
      <strong>Martín Sieiro Gutiérrez</strong> - ©
      {{ new Date().getFullYear() }}
    </v-col>
  </v-footer>
</template>

<script>
import { VFooter, VCol } from "vuetify/lib";
export default {
  name: "Footer",
  components: {
    VFooter,
    VCol,
  },
};
</script>

<style></style>
