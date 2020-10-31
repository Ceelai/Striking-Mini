<template>
  <span>
    <top-banner></top-banner>
    <variations></variations>
    <strengths></strengths>
    <v-divider></v-divider>
    <quote></quote>
    <footer1></footer1>
  </span>
</template>

<script>
// @ is an alias to /src
import TopBanner from "@/components/TopBanner.vue";
import Strengths from "@/components/Strengths.vue";
import Variations from "@/components/Variations.vue";
import Quote from "@/components/Quote.vue";
import Footer1 from "@/components/Footer.vue";

export default {
  name: "TheCar",
  components: {
    TopBanner,
    Strengths,
    Variations,
    Quote,
    Footer1
  }
};
</script>
