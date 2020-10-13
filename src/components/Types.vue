<template>
  <v-container class="container">
    <div
      class="pt-lg-8 pb-lg-8 pb-sm-4 pb-md-8 text-lg-h3 text-xl-h3 text-md-h3 text-sm-h3 text-h5 text-center font-weight-light text-decoration-underline"
      align-content="center"
      justify-content="center"
    >
      {{ maintitle }}
    </div>
    <v-carousel :show-arrows-on-hover="true" hide-delimiters v-model="model">
      <v-carousel-item v-for="variant in variants" :key="variant">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3 text--black">
            {{ variant.title }}
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: "types",
  data: () => ({
    maintitle: "Not All Are The Same.",
    model: 0,
    variants: [
      {
        title: "Light and Nimble",
        src: "",
        blurb: "Weighting between 1200 & 1800 lbs. Look how short it is!"
      },
      {
        title: "Retro Modern Aesthetic",
        src: "",
        blurb: "Stylish, even for the modern standard."
      },
      {
        title: "Spirited Driving",
        src: "",
        blurb: "Go-kart Weekends?"
      }
    ]
  })
};
</script>

<style lang="sass" scoped></style>
