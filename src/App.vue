<template>
  <v-app>
    <NavBar />
    <v-main>
      <ProfessionalCareer />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProfessionalCareer from "./components/ProfessionalCareer";
export default {
  name: "App",
  components: { NavBar, ProfessionalCareer, Footer },
  data() {
    return {
      langs: [
        { name: "Español", code: "es" },
        { name: "English", code: "en" },
      ],
    };
  },
};
</script>

<style>
.sm {
  width: 6em;
}
.white-text {
  color: white;
}
</style>
