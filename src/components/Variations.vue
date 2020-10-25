<template class="grey lighten-4">
  <v-container>
      <v-row>
<!-- Put two columns here (1 for carousel, other for description) -->
<!-- v-for to iterate through data object -->
<!-- add animations for smoother transition -->

      </v-row>
     </v-container>
</template>

<script>
export default {
  data: () => ({
    maintitle: "Variations of the Mini",
    imageCarosel: [
      {
        title: "Mark I Mini",
        src: "Mk1Mini.jpg",
        description: ""
      },
      {
        title: "Monte Carlo Mini",
        src: "montecarlomini.jpg",
        description: ""
      },
      {
        title: "Mark III Mini",
        src: "Mk3.jpg",
        description: ""
      },
      {
        title: "Mark IV Mini",
        src: "Mk5.jpg",
        description: ""
      },
      {
        title: "Mini Van",
        src: "minivan.jpg",
        description: ""
      },
      {
        title: "Mini Pickup",
        src: "minipickup.jpg",
        description: ""
      },
      {
        title: "Mini Countryman (Woody)",
        src: "woody.jpg",
        description: ""
      },
      {
        title: "Mini Cooper w/ Sportspack",
        src: "Sportspack.jpg",
        description: ""
      }
    ]
  }),
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped></style>
