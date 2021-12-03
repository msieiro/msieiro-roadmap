<template>
  <v-card elevation="2" outlined max-width="800" class="mx-auto">
    <v-row>
      <v-col sm="12" md="4">
        <v-img rounded src="../assets/images/yo.jpeg"></v-img>
      </v-col>
      <v-col sm="12" md="8">
        <v-card-title
          >Martín Sieiro Gutiérrez<v-chip
            class="ma-2"
            color="teal darken-2"
            text-color="white"
          >
            26 years
            <v-icon right> mdi-cake-variant </v-icon>
          </v-chip></v-card-title
        >

        <v-card-text
          >Actualmente estoy aprendiendo las siguientes tecnologías
        </v-card-text>
        <v-card-actions>
          <img
            v-for="(tech, t) in learning"
            :key="t"
            :src="technologies[tech] && technologies[tech].src"
            :alt="technologies[tech] && technologies[tech].name"
            height="50"
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

<style></style>
