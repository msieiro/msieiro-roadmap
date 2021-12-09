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
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import ProfessionalCareer from "./components/ProfessionalCareer";
export default {
  name: "App",
  components: { NavBar, ProfessionalCareer, Footer, Profile },
};
</script>

<style lang="scss">
.bg {
  background-color: #e8e9ed !important;
}
</style>
