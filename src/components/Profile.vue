<template>
  <v-container>
    <v-card elevation="2" outlined max-width="800" class="mx-auto">
      <v-row>
        <v-col sm="12" md="4">
          <v-img rounded src="../assets/images/yo.jpeg"></v-img>
        </v-col>
        <v-col sm="12" md="8">
          <v-card-title
            class="text-h6 text-center mx-auto d-flex justify-sm-space-between justify-center morePadding minimizedText"
            ><v-chip
              class="ma-2 mx-auto ml-1 mr-1 minimizedText"
              color="blue darken-2"
              text-color="white"
            >
              A Coruña
              <v-icon right> mdi-home-map-marker </v-icon> </v-chip
            ><span class="minimizedText">Martín Sieiro Gutiérrez</span
            ><v-chip
              class="ma-2 mx-auto ml-1 mr-1 minimizedText"
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
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item icon="mdi-github" color="black">
        <v-card dark class="text-justify" color="black" max-width="300">
          <v-card-title class="text-subtitle-1">
            vimeo-downloader-compressor</v-card-title
          >
          <v-card-text class="white text--primary pt-2">
            <em> Downloader and compressor of private videos from Vimeo. </em>
            <!-- <img
              v-for="(tech, t) in learning"
              :key="t"
              :src="technologies[tech] && technologies[tech].src"
              :alt="technologies[tech] && technologies[tech].name"
              height="45"
              class="mx-1 my-1"
            /> -->
            <v-card-actions>
              <v-btn
                small
                text
                color="black"
                class="mx-auto"
                target="_blank"
                href="https://github.com/msieiro/vimeo-downloader-compressor"
              >
                Ver repositorio
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
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

<style></style>
