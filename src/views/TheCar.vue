<template>
  <span>
    <top-banner></top-banner>
    <variations></variations>
    <strengths></strengths>
  </span>
</template>

<script>
// @ is an alias to /src
import TopBanner from "@/components/TopBanner.vue";
import Strengths from "@/components/Strengths.vue";
import Variations from "@/components/Variations.vue";
export default {
  name: "TheCar",
  components: {
    TopBanner,
    Strengths,
    Variations
  }
};
</script>
