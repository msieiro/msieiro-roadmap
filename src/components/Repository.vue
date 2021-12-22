<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item icon="mdi-github" color="black">
      <v-card
        dark
        class="text-justify"
        color="black"
        max-width="300"
        elevation="6"
      >
        <v-card-title class="text-subtitle-1">
          {{ repository.title }}</v-card-title
        >
        <v-card-text class="white text--primary pt-2">
          <em>{{ repository.description }}</em>
          <v-card-actions>
            <v-btn
              text
              elevation="2"
              outlined
              x-small
              color="black"
              class="mx-auto"
              target="_blank"
              :href="repository.src"
            >
              {{ $t("general.gotorepository") }}
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import {
  VTimeline,
  VTimelineItem,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VBtn,
} from "vuetify/lib";
export default {
  name: "Repository",
  components: {
    VTimeline,
    VTimelineItem,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VBtn,
  },
  props: {
    repository: Object,
  },
};
</script>

<style></style>
