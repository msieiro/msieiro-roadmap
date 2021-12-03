<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="black lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
          width="140"
        >
          <v-icon left> mdi-earth </v-icon>
          {{ $t("language") }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in localeItems"
          :key="index"
          class="text-center"
        >
          <v-list-item-title @click="changeLocale(item)" class="text-center">
            <v-img
              :src="item.flag"
              height="35"
              width="55"
              class="my-2 mx-auto"
            />
            <v-divider v-if="index == 0"></v-divider>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import languages from "../data/languages";
export default {
  name: "LanguageSelector",
  data() {
    return {
      localeItems: languages,
    };
  },
  methods: {
    changeLocale(lang) {
      this.$i18n.locale = lang.code;
    },
  },
};
</script>

<style>
.sm {
  width: 0.8em;
}
</style>
