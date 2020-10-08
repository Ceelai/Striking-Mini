<template>
  <v-container class="container">
    <v-row class="top-banner">
      <v-col cols="12" align-self="center" class="">
        <div
          class="text-lg-h4 text-xl-h4 text-md-h6 text-sm-h6 text-xs-h6 text-center font-weight-light"
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

    <v-row class="">
      <v-col class="col-lg-1"></v-col>
      <v-col class="col-sm-12 col-xs-12 col-lg-2 col-xl-2 col-md-12 ">
        <v-row>
          <v-img
            class="left-image"
            contain
            src="../assets/classic-mini.jpg"
          ></v-img>
        </v-row>
        <v-row class="text-h5 text-center" justify="center"
          >Nimble but Extremely Fun</v-row>
        <v-row class="pt-8 text-subtitle-2 text-center">
          With the wheels placed in the furthest corners of the chassis, the
          handling of the Classic Mini is the most go-kart experience in any
          road legal motor vehicle thanks to its lightweight and small size. The
          Classic Mini is one of the worlds first motor vehicles to use a space
          saving transverse engine that allowed for a front-wheel drive layout.
          This allowed 80% of the cars entire floorpan to be used for passengers
          and cargo.
        </v-row>
      </v-col>
        <v-col class="col-lg-2"></v-col>
      <v-col  class="col-sm-12 col-xs-12 col-lg-2 col-xl-2 col-md-12  ">
        <v-row>
          <v-img
            class="center-image"
            contain
            src="../assets/whiteredmini.jpg"
          ></v-img>
        </v-row>
        <v-row class="text-h5" justify="center">Retro Modern Aesthetic</v-row>
        <v-row class="pt-8 text-subtitle-2 text-center">
          The Classic Mini is one of the most recognizable vehicles in history
          with available add-ons such as rally inspired fog-lights, wide wheel
          fenders and racing stripes. Every Mini is different and none of them
          are the same. Keeping with the classic look of chrome, the aesthetic
          of the Classic Mini turns heads no matter the configuration.
        </v-row>
      </v-col>
        <v-col class="col-lg-2"></v-col>
      <v-col  class="col-sm-12 col-xs-12 col-lg-2 col-xl-2 col-md-12 ">
        <v-row>
          <v-img
            class="right-image"
            contain
            src="../assets/citycarmini.jpg"
          ></v-img>
        </v-row>
        <v-row class="text-h5" justify="center">The Spirit of Driving</v-row>
        <v-row class="pt-8 text-subtitle-2 text-center">
          Paying homage to the raw and mechanical driving feel of the Classic
          Mini. From the un-conventional driving position, to the lack of
          eletronics that come with the territory, are some of the primary
          reasons the Classic Mini reigns surpreme even till this day.
        </v-row>
      </v-col>
        <v-col class="col-lg-1 "></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TheCar",
  data() {
    return {};
  }
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
