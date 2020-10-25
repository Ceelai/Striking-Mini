<template>
  <v-container>
    <v-row class="hidden-md-and-down">
      <!-- add animations for smoother transition -->
      <v-col class="col-xl-4 col-lg-4 offset-xl-2 offset-lg-2">
        <div>
          <v-carousel
            v-model="model"
            cycle
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item
              id="carouselItem"
              v-for="(slide, i) in imageCarousel"
              :key="i"
              :src="require(`@/assets/${slide.src}`)"
              transition="fade-transition"
              reverse-transition="fade-transition"
              contain
            >
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
      <v-col class="col-lg-4 col-xl-4 offset-xl-2 offset-lg-2">
        <div>
          {{ slide.title }}
        </div>
        <div>
          {{ slide.description }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    maintitle: "Variations of the Mini",
    imageCarousel: [
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

<style lang="scss" scoped>
@media only screen and (max-width: 500px) {
}
</style>
