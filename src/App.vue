<template>
  <v-app>
    <NavBar />
    <v-main>
      <v-container>
        <Profile />
      </v-container>
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
  data() {
    return {
      langs: [
        {
          name: "Español",
          code: "es",
          flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Spain_%28Civil%29.svg",
        },
        {
          name: "English",
          code: "en",
          flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
        },
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
