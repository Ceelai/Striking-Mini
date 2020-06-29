<template>
  <v-container fluid fill-height class="nopad">
    <v-row class="main">
      <v-col cols="12" class="pa-0 landing-hero">
        <v-row>
          <v-col offset-sm="1" cols="4" class="square pa-5">
            <div class="white--text mainfont text-sm-center">Mighty</div>
            <div class="white--text mainfont text-sm-center">but</div>
            <div class="white--text mainfont text-sm-center">Mini.</div>
          </v-col>
        </v-row>
      </v-col>
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
@import "../sass/variables.scss";

body{
  overflow: hidden !important;
}

.landing-hero {
  background: url("../assets/mini-landingpage.jpg");
  max-height: 100vh;
  background-size: cover;
  background-position: center;
}

.nopad {
  padding: 0;
  max-height: 100vh;
  overflow: hidden;
}

.main {
  height: 100%;
  max-height: 100vh;
}

.square {
  background-color: rgb(112, 112, 112);
  opacity: 78%;
}

.mainfont {
  font-family: $heading-font-family !important;
  font-size: 4vw !important;
  line-height: none !important;
}
</style>
