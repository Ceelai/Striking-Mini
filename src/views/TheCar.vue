<template>
  <span>
    <top-banner></top-banner>
    <strengths></strengths>
  </span>
</template>

<script>
// @ is an alias to /src
import TopBanner from "@/components/TopBanner.vue";
import Strengths from "@/components/Strengths.vue";
export default {
  name: "TheCar",
  components: {
    TopBanner,
    Strengths
  }
};
</script>
