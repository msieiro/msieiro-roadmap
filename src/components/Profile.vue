<template>
  <v-card elevation="2" outlined max-width="800" class="mx-auto">
    <v-row>
      <v-col sm="12" md="4">
        <v-img rounded src="../assets/images/yo.jpeg"></v-img>
      </v-col>
      <v-col sm="12" md="8">
        <v-card-title
          class="text-h6 text-center mx-auto d-flex justify-sm-space-between justify-center morePadding minimizedText"
          ><v-chip
            class="ma-2 mx-auto ml-1 mr-1"
            color="blue darken-2"
            text-color="white"
          >
            A Coruña
            <v-icon right> mdi-home-map-marker </v-icon> </v-chip
          >Martín Sieiro Gutiérrez<v-chip
            class="ma-2 mx-auto ml-1 mr-1"
            color="pink darken-2"
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
            v-for="(tech, t) in learning"
            :key="t"
            :src="technologies[tech] && technologies[tech].src"
            :alt="technologies[tech] && technologies[tech].name"
            height="45"
            class="mx-1 my-1"
          />
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import technologies from "../data/technologies";
import learning from "../data/learning";
export default {
  name: "Profile",
  data() {
    return {
      technologies,
      learning,
    };
  },
};
</script>

<style>
@media (max-width: 516px) {
  .morePadding {
    padding-left: 75px !important;
    padding-right: 75px !important;
  }
}
@media (max-width: 400px) {
  .minimizedText {
    font-size: 0.7em !important;
  }
}
</style>
