<template>
  <v-app-bar app dense elevation="4" color="black lighten-2">
    <v-toolbar-title class="white-text">{{
      $t("navbar.title")
    }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      class="mx-2"
      color="white"
      href="https://github.com/msieiro"
      alt="Github"
      target="_blank"
      small
      icon
    >
      <v-icon dark> mdi-github </v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      href="https://www.linkedin.com/in/martinsieirogutierrez/"
      alt="Linkedin"
      target="_blank"
      small
      icon
    >
      <v-icon color="primary"> mdi-linkedin </v-icon>
    </v-btn>
    <LanguageSelector />
  </v-app-bar>
</template>

<script>
import { VAppBar, VToolbarTitle, VSpacer, VBtn, VIcon } from "vuetify/lib";
import LanguageSelector from "./LanguageSelector";
export default {
  name: "NavBar",
  components: {
    LanguageSelector,
    VAppBar,
    VToolbarTitle,
    VSpacer,
    VBtn,
    VIcon,
  },
};
</script>

<style></style>
