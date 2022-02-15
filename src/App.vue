<template>
  <v-app>
    <NavBar />
    <v-main class="bg">
      <Profile />
      <ProfessionalCareer />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { VApp, VMain } from "vuetify/lib";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ProfessionalCareer from "./components/ProfessionalCareer";
import Profile from "./components/Profile";
export default {
  name: "App",
  components: { NavBar, ProfessionalCareer, Footer, Profile, VApp, VMain },
};
</script>

<style lang="scss">
.bg {
  background-color: #e8e9ed !important;
}
</style>
