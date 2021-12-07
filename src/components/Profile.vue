<template>
  <v-container>
    <v-card elevation="2" outlined max-width="800" class="mx-auto">
      <v-row>
        <v-col sm="12" md="4">
          <v-img
            loading="lazy"
            src="../assets/images/yo.jpeg"
            alt="Martin Sieiro Gutiérrez"
          ></v-img>
        </v-col>
        <v-col sm="12" md="8">
          <v-card-title
            class="text-h6 text-center mx-auto d-flex justify-sm-space-between justify-center morePadding minimizedText"
            ><v-chip
              class="ma-2 mx-auto ml-1 mr-1 minimizedText"
              color="green darken-3"
              text-color="white"
            >
              A Coruña
              <v-icon right> mdi-home-map-marker </v-icon> </v-chip
            ><span class="minimizedText">Martín Sieiro Gutiérrez</span
            ><v-chip
              class="ma-2 mx-auto ml-1 mr-1 minimizedText"
              color="cyan darken-3"
              text-color="white"
            >
              26 {{ $t("profile.years") }}
              <v-icon right> mdi-cake-variant </v-icon></v-chip
            >
          </v-card-title>

          <v-card-text class="text-center"
            >{{ $t("profile.actually") }}
          </v-card-text>
          <v-card-actions class="d-flex flex-wrap justify-center">
            <img
              v-for="(tech, t) in profile.learning"
              :key="t"
              class="mx-1 my-1"
              height="45"
              loading="lazy"
              :alt="technologies[tech] && technologies[tech].name"
              :src="technologies[tech] && technologies[tech].src"
            />
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
    <Repository :repository="profile.repository" />
  </v-container>
</template>

<script>
import technologies from "../data/technologies";
import profile from "../data/profile";
import Repository from "./Repository";
export default {
  name: "Profile",
  components: { Repository },
  data() {
    return {
      technologies,
      profile,
    };
  },
};
</script>

<style></style>
