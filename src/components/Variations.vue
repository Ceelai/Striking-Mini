<template class="">
  <v-container class="grey lighten-4">
    <v-row class="grey lighten-4">
      <!-- add animations for smoother transition -->
      <v-col class="col-lg-4 col-xl-4 offset-xl-4 offset-lg-4">
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
              <v-row class="fill-height pt-4" align="start" justify="center">
                <div class="text-h4 black--text"> {{slide.title}} </div>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    maintitle: "Variations of the Mini",
    model: 0,
    imageCarousel: [
      {
        src: "Mk1Mini.jpg",
        title: "Mark I Mini",
        description: ""
      },
      {
        src: "montecarlomini.jpg",
        title: "Monte Carlo Mini",
        description: ""
      },
      {
        src: "Mk3.jpg",
        title: "Mark III Mini",
        description: ""
      },
      {
        src: "Mk5.jpg",
        title: "Mark IV Mini",
        description: ""
      },
      {
        src: "minivan.jpg",
        title: "Mini Van",
        description: ""
      },
      {
        src: "minipickup.jpg",
        title: "Mini Pickup",
        description: ""
      },
      {
        src: "woody.jpg",
        title: "Mini Countryman (Woody)",
        description: ""
      },
      {
        src: "Sportspack.jpg",
        title: "Mini Cooper w/ Sportspack",
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
