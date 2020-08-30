<template>
  <v-container class="container pa-0">
    <v-row>
      <v-col cols="6" class="d-flex flex-column herotext pb-16">
        <div class="text-h6 font-weight-regular">Austin x Morris x Rover.</div>
        <div class="text-h1 font-weight-light">Mighty but Mini.</div>
        <div class="body-2 pt-3 call-action">
          An editorial-esque vue.js webpage dedicated to one of the greatest
          automobile designs in history.
        </div>
        <v-btn class="ma-3" max-width="150px" href="" small>Learn More</v-btn>
      </v-col>
      <v-col cols="1" class="landing-right"></v-col>
      <v-col cols="4" class="d-flex flex-column landing-right">
        <v-img class="landing-image" contain src="../assets/mini1.jpg"></v-img>
      </v-col>
      <v-col cols="1" class="landing-right"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LandingHero",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.landing-right {
  background-color: #dfcab9;
  max-height: 90vh;
  height: 90vh;
}

.herotext {
  align-self: auto;
  justify-content: center;
}

.call-action {
  color: #6a6161;
  font-size: 21px;
}

.landing-image {
  width: 100%;
  max-height: 100vh;
}
.container {
  max-height: inherit;
}
</style>
