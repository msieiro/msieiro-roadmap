<template>
  <v-row no-gutters>
    <v-col sm="12">
      <div class="text-h2 text-center my-2 d-none d-xs-none d-md-block">🚀</div>
      <div class="text-h2 ml-7 my-2 d-md-none">🚀</div>
      <v-container>
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
            :icon="item.icon"
            fill-dot
            :large="item.good_learning"
          >
            <v-card :color="item.color" dark class="text-justify">
              <v-card-title class="text-subtitle-1">{{
                item.qualification
              }}</v-card-title>
              <v-card-subtitle>{{ item.years }}</v-card-subtitle>
              <v-card-text class="white text--primary pt-2">
                <p>
                  <strong>{{ item.school }}</strong>
                </p>
                <p>
                  <em>{{ item.level }}</em>
                </p>
                <img
                  v-for="(tech, t) in item.technologies"
                  :key="t"
                  :src="technologies[tech] && technologies[tech].src"
                  :alt="technologies[tech] && technologies[tech].name"
                  height="45"
                  class="mx-1 my-1"
                />
                <v-card-actions v-if="item.link">
                  <v-btn
                    small
                    text
                    color="black"
                    class="mx-auto"
                    :href="item.link"
                    target="_blank"
                  >
                    Ver certificación
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import technologies from "../data/technologies";
import career from "../data/career";
export default {
  name: "ProfessionalCareer",
  data() {
    return {
      items: career,
      technologies,
    };
  },
};
</script>

<style></style>
