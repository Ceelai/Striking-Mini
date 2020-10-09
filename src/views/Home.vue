<template>
  <span>
    <landing-hero></landing-hero>
    <top-banner></top-banner>
    <types></types>
  </span>
</template>

<script>
// @ is an alias to /src
import LandingHero from "@/components/LandingHero.vue";
import TopBanner from "@/components/TopBanner.vue";
import Types from "@/components/Types.vue";
export default {
  name: "Home",
  components: {
    LandingHero,
    TopBanner,
    Types
  }
};
</script>
