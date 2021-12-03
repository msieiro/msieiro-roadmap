<template>
  <v-app-bar app dense elevation="4" color="black lighten-2">
    <v-toolbar-title class="white-text">Roadmap</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      class="mx-2"
      color="white"
      href="https://github.com/msieiro"
      target="_blank"
      small
    >
      <v-icon dark> mdi-github </v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      href="https://www.linkedin.com/in/martinsieirogutierrez/"
      target="_blank"
      small
    >
      <v-icon color="primary"> mdi-linkedin </v-icon>
    </v-btn>
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

<style></style>
