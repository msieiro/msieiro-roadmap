<template>
  <v-app-bar app dense elevation="4" color="black lighten-2">
    <v-toolbar-title class="white-text">CV</v-toolbar-title>
    <v-spacer></v-spacer>
    <LanguageSelector />
  </v-app-bar>
</template>

<script>
import LanguageSelector from "./LanguageSelector";
export default {
  name: "NavBar",
  components: { LanguageSelector },
};
</script>

<style>

</style>
