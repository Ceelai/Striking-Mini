<template>
  <v-container>
    <v-row>
      <v-col class="herotext col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
        <sequential-entrance fromLeft>
          <div class="text-h6 font-weight-regular">
            Austin x Morris x Rover.
          </div>
          <div class="caption font-weight-regular">Just Mini.</div>
          <div
            class="text-md-h1 text-lg-h1 text-xl-h1 text-sm-h2 text-h4  font-weight-light"
          >
            Mighty but Mini.
          </div>

          <div class="body-2 pt-3 call-action">
            An editorial-esque vue.js webpage dedicated to one of the greatest
            automobile designs in history.
          </div>
          <v-btn
            class="mt-3 justify-center align-center"
            max-width="150px"
            to="TheCar"
            small
            >Learn More</v-btn
          >
        </sequential-entrance>
      </v-col>

      <v-col
        class="flex-column mobile-hide landing-right col-lg-6 col-xl-6 col-md-6 col-sm-6"
      >
        <sequential-entrance>
          <v-img class="landing-image" contain src="@/assets/mini1.jpg"></v-img>
        </sequential-entrance>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LandingHero",
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.landing-right {
  background-color: #dfcab9;
  max-height: 90vh;
  height: 90vh;
  display: flex;
  align-self: center;
  justify-content: center;
}

.herotext {
  align-self: center;
  justify-content: center;
}

.call-action {
  color: #6a6161;
  font-size: 21px;
}

.landing-image {
  max-height: 50vh;
}

@media only screen and (max-width: 600px) {
  .mobile-hide {
    display: none;
  }

  .herotext {
    text-align: center;
    padding-top: 5vh;
  }
}
</style>
