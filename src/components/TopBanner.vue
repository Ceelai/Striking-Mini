<template>
  <v-container class="container">
    <div
      class="pt-lg-8 pb-lg-8 pb-sm-4 pb-md-8 text-lg-h3 text-xl-h3 text-md-h3 text-sm-h3 text-h5 text-center font-weight-light text-decoration-underline"
      align-content="center"
      justify-content="center"
    >
      {{ maintitle }}
    </div>
    <div
      class="text-xs-caption text-sm-caption text-md-subtitle-1 text-lg-subtitle-1 text-xl-subtitle-1 text-center"
      align-self="center"
    >
      {{ subtitle }}
    </div>
    <v-container>
      <v-row
        dense
        class="text-xl-h4 text-lg-h4 text-md-h6 text-sm-h6 text-xs-h6"
      >
        <v-col
          class="col-lg-4 col-xl-4 col-md-4 col-sm-12"
          v-for="card in cards"
          :key="card.title"
        >
          <v-card>
            <v-img
              :src="require(`@/assets/${card.src}`)"
              class="white--text align-end rounded"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
              height="400px"
            >
              <v-card-title class="" v-text="card.title"></v-card-title>
              <v-card-text
                v-text="card.blurb"
                class="caption pb-0"
              ></v-card-text>
              <v-card-subtitle
                v-text="card.subtitle"
                class="white--text pt-0 caption"
              ></v-card-subtitle>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "thecar",
  data: () => ({
    cards: [
      {
        title: "Light and Nimble",
        src: "flexmini1.jpg",
        blurb: "Weighting between 1200 & 1800 lbs. Look how short it is!",
        subtitle:
          "Combining tyres at the 4 corners and it's weight, creates an unforgettable experience."
      },
      {
        title: "Retro Modern Aesthetic",
        src: "flexmini2.jpg",
        blurb: "Stylish, even for the modern standard.",
        subtitle:
          "Many Mini's seldom came with modern comforts. That just means you can focus on driving."
      },
      {
        title: "Spirited Driving",
        src: "flexmini3.jpg",
        blurb: "Go-kart Weekends?",
        subtitle: "No matter what, the experience is the most important part."
      }
    ],
    maintitle: "What's So Special?",
    subtitle:
      "For over 60 years, Mini has remained as one of the most iconic vehicles in automobile history. With multiple motor configurations and chassis versions, Mini is easily one of the most recognizable brands in the world."
  })
};
</script>

<style scoped lang="scss">
.top-banner {
  background-color: black;
  color: white;

  justify-self: center;
}

.body {
  background-color: black;
}
.container {
  max-height: inherit;
}

.v-toolbar {
  flex: none !important;
}
</style>
