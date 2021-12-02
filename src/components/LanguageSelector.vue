<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="black lighten-2" dark v-bind="attrs" v-on="on">
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
          <v-list-item-title @click="changeLocale(item)">{{
            item.name
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "LanguageSelector",
  data() {
    return {
      localeItems: [
        { name: "English", code: "en" },
        { name: "Español", code: "es" },
      ],
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
