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
            :color="checkItemColor(item.type)"
            :icon="checkItemIcon(item.type)"
            fill-dot
            :large="item.good_learning"
          >
            <v-card
              :color="checkItemColor(item.type)"
              dark
              class="text-justify"
              elevation="6"
              max-width="850"
            >
              <v-card-title class="text-subtitle-1">{{
                $t(`career.qualifications.${item.qualification}`)
              }}</v-card-title>
              <v-card-subtitle>{{ formatDate(item) }}</v-card-subtitle>
              <v-card-text class="white text--primary pt-2">
                <p>
                  <strong>{{ $t(`career.companies.${item.company}`) }}</strong>
                </p>
                <p>
                  <em>{{ $t(`career.levels.${item.level}`) }}</em>
                </p>
                <v-container class="d-flex flex-wrap justify-start px-0 py-0">
                  <v-img
                    v-for="(tech, t) in item.technologies"
                    :key="t"
                    class="mx-1 my-1 justify-start"
                    :height="technologies[tech] && technologies[tech].height"
                    :width="technologies[tech] && technologies[tech].width"
                    :alt="technologies[tech] && technologies[tech].name"
                    :src="technologies[tech] && technologies[tech].src"
                    contain
                  ></v-img>
                </v-container>
                <v-row>
                  <v-col>
                    <v-chip
                      v-for="(skill, s) in item.skills"
                      :key="s"
                      class="ma-2 mx-1"
                      :color="checkItemColor(item.type)"
                      text-color="white"
                    >
                      {{ $t(`career.skills.${skill}`) }}
                    </v-chip></v-col
                  >
                </v-row>
                <v-card-actions v-if="item.link">
                  <v-btn
                    text
                    elevation="2"
                    outlined
                    x-small
                    color="black"
                    class="mx-auto"
                    :href="item.link"
                    target="_blank"
                  >
                    {{ $t("general.seecertificate") }}
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
import {
  VRow,
  VCol,
  VContainer,
  VTimeline,
  VTimelineItem,
  VCard,
  VCardTitle,
  VCardSubtitle,
  VCardText,
  VCardActions,
  VImg,
  VChip,
  VBtn,
} from "vuetify/lib";
import technologies from "../data/technologies";
import career from "../data/career";
export default {
  name: "ProfessionalCareer",
  components: {
    VRow,
    VCol,
    VContainer,
    VTimeline,
    VTimelineItem,
    VCard,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VCardActions,
    VImg,
    VChip,
    VBtn,
  },
  data() {
    return {
      items: career,
      technologies,
    };
  },
  methods: {
    checkItemColor(type) {
      return type === "JOB"
        ? "red darken-3"
        : type === "SCHOOL"
        ? "purple darken-3"
        : type === "CERTIFICATE"
        ? "pink darken-3"
        : "";
    },
    checkItemIcon(type) {
      return type === "JOB"
        ? "mdi-briefcase-outline"
        : type === "SCHOOL"
        ? "mdi-school-outline"
        : type === "CERTIFICATE"
        ? "mdi-certificate-outline"
        : "";
    },
    formatDate(item) {
      let result = "";
      if (item.years.from.month) {
        result +=
          this.$t(`general.months.${item.years.from.month}`) +
          " " +
          item.years.from.year;
      }
      if (item.years.to.month) {
        result +=
          " - " +
          this.$t(`general.months.${item.years.to.month}`) +
          " " +
          item.years.to.year;
      }
      return result;
    },
  },
};
</script>

<style></style>
