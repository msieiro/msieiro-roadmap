<template>
  <v-footer padless color="black lighten-2">
    <v-col class="text-center white-text" cols="12">
      {{ $t("footer.sentence") }}
      <strong>Martín Sieiro Gutiérrez</strong>
    </v-col>
    <v-col class="text-center white-text" cols="12">
      <strong>{{ new Date().getFullYear() }}</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style></style>
