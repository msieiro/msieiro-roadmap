<template>
  <v-row no-gutters>
    <v-col sm="12">
      <div class="text-h2 text-center my-2">Hoja de ruta</div>
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
                <v-chip
                  class="my-1"
                  v-for="(tech, t) in item.technologies"
                  :key="t"
                  >{{ tech }}</v-chip
                >
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
export default {
  name: "ProfessionalCareer",
  data() {
    return {
      items: [
        {
          qualification: "Full stack web developer",
          school: "Instituto Interculturas",
          level: "Contrato indefinido",
          years: "Abr 2021 – Actualidad",
          technologies: [
            "CSS",
            "JavaScript",
            "Vue JS",
            "Vuetify",
            "Springboot",
            "Hibernate",
            "Gradle",
            "PostgreSQL",
            "Docker",
            "Wordpress",
            "H5P",
            "Architecture Patterns",
          ],
          color: "red darken-2",
          icon: "mdi-hammer-wrench",
          good_learning: true,
        },
        {
          qualification: "Bootcamp",
          school: "Hack a boss",
          level: "Desarrollo de aplicaciones web",
          years: "Oct 2020 – Mar 2021",
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node",
            "npm",
            "Express",
            "React",
            "Styled-Components",
            "Data Modeling",
            "SQL",
            "Figma",
            "Architecture Patterns",
          ],
          color: "purple darken-3",
          icon: "mdi-school-outline",
          good_learning: true,
        },
        {
          qualification: "Certificación",
          school: "freeCodeCamp",
          level: "Responsive Web Design",
          years: "Oct 2020",
          technologies: ["HTML", "CSS", "JavaScript"],
          color: "yellow darken-2",
          icon: "mdi-certificate-outline",
          link: "https://www.freecodecamp.org/certification/fcc86715b66-fcc3-49ad-b077-6f15ceabb7da/responsive-web-design",
        },
        {
          qualification: "Certificación",
          school: "Google Actívate",
          level: "Introducción al Desarrollo Web II",
          years: "Sept 2020",
          technologies: ["HTML", "CSS", "JavaScript"],
          color: "yellow darken-2",
          icon: "mdi-certificate-outline",
          link: "https://learndigital.withgoogle.com/activate/validate-certificate-code",
        },
        {
          qualification: "Certificación",
          school: "Google Actívate",
          level: "Introducción al Desarrollo Web I",
          years: "Sept 2020",
          technologies: ["HTML", "CSS", "JavaScript"],
          color: "yellow darken-2",
          icon: "mdi-certificate-outline",
          link: "https://learndigital.withgoogle.com/activate/validate-certificate-code",
        },
        {
          qualification: "Full stack web developer",
          school: "Indra Sistemas",
          level: "Formación Profesional Dual",
          years: "Mar 2020 – Ago 2020",
          technologies: [
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript",
            "JQuery",
            "Java",
            "Java J2EE",
            "Spring MVC",
            "Hibernate",
            "Maven",
            "TomCat",
            "GIT",
            "SVN",
            "MSSQL Server",
            "Data Modeling",
          ],
          color: "red darken-2",
          icon: "mdi-hammer-wrench",
          good_learning: true,
        },
        {
          qualification: "FP Superior",
          school: "IES Fernando Wirtz Suárez",
          level: "Desarrollo de aplicaciones web",
          years: "2018 – 2020",
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Java",
            "Java J2EE",
            "Spring MVC",
            "Hibernate",
            "Data Modeling",
            "SQL",
            "MYSQL",
            "NO-SQL",
            "MongoDB",
            "Docker",
          ],
          color: "purple darken-3",
          icon: "mdi-school-outline",
          good_learning: true,
        },
        {
          qualification: "Full stack web developer",
          school: "Indra Sistemas",
          level: "Formación Profesional Dual",
          years: "Mar 2019 – Ago 2019",
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Java",
            "Java J2EE",
            "Spring MVC",
            "Hibernate",
            "Maven",
            "TomCat",
            "MSSQL Server",
            "Data Modeling",
          ],
          color: "red darken-2",
          icon: "mdi-hammer-wrench",
          good_learning: true,
        },
        {
          qualification: "FP Superior",
          school: "IES Fernando Wirtz Suárez",
          level: "Desarrollo de aplicaciones web",
          years: "2018 – 2019",
          technologies: ["HTML", "CSS", "Java", "SQL"],
          color: "purple darken-3",
          icon: "mdi-school-outline",
          good_learning: true,
        },
      ],
    };
  },
};
</script>

<style></style>
