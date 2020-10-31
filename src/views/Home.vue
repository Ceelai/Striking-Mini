<template>
  <span>
    <landing-hero></landing-hero>
  </span>
</template>

<script>
// @ is an alias to /src
import LandingHero from "@/components/LandingHero.vue";

export default {
  name: "Home",
  components: {
    LandingHero
  }
};
</script>
