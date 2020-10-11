<template>
  <v-container class="container">
    <div
      class="pt-16 pb-16 text-lg-h4 text-xl-h4 text-md-h6 text-sm-h6 text-xs-h6 text-center font-weight-light text-decoration-underline"
      align-content="center"
      justify-content="center"
    >
      What's So Special?
    </div>
    <v-container>
      <v-row
        dense
        class="text-xl-h4 text-lg-h4 text-md-h6 text-sm-h6 text-xs-h6"
      >
        <v-col
          class="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-xs-12"
          v-for="card in cards"
          :key="card.title"
        >
          <v-card>
            <v-img
              :src="require(`@/assets/${card.src}`)"
              class="white--text align-end rounded"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400px"
              aspect-ratio=""
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-row class="top-banner">
      <v-col cols="12" align-self="center" class="pa-16">
        <div
          class="text-lg-h4 text-xl-h4 text-md-h6 text-sm-h6 text-xs-h6 text-center font-weight-light text-decoration-underline"
        >
          The Story Behind Classic Mini (1959 - 2000)
        </div>
        <v-col
          class="col-sm-12 col-xs-12 col-lg-6 col-xl-6 col-md-6 offset-md-3 offset-lg-3 offset-xl-3"
        >
          <div class="body-2">
            For over 60 years, Mini has remained as one of the most iconic cars
            in automobile history. Alec Issigonis, the original designer of the
            mini, set out to create a vehicle capable of seating 4 adults while
            maintaining a high fuel economy. Produced by multiple manufactures
            over its 60 year history, the Classic Mini's aesthetic did not
            change drastically from the original 1960 models. Mini went through
            multiple iterations that included several engine options, later
            models even included airbags and air conditioning.
          </div>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TheCar",
  data: () => ({
    cards: [
      { title: "Light and Nimble", src: "flexmini1.jpg" },
      { title: "Retro Modern Aesthetic", src: "flexmini2.jpg" },
      { title: "Spirited Driving", src: "flexmini3.jpg" }
    ]
  })
};
</script>

<style scoped lang="scss">
.top-banner {
  background-color: black;
  color: white;

  justify-self: center;
}

.container {
  max-height: inherit;
}

.v-toolbar {
  flex: none !important;
}
</style>
