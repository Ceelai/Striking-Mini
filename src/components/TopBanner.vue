<template>
  <v-container class="container pa-0">
    <v-row class="top-banner">
      <v-col cols="6" md="6" class="">
        <div
          class="text-h4 pb-2 text-center font-weight-light"
        >The Story Behind Classic Mini (1959 - 2000)</div>
      </v-col>
      <v-col cols="6" class="" sm="6"></v-col>
    </v-row>
    <v-row class>
      <v-col cols="6">
        <div class="text-subtitle-2 pt-2">
          For over 60 years, Mini has remained as one of the most iconic cars in automobile history. Alec Issigonis,
          the original designer of the mini,
          set out to create a vehicle capable of seating 4 adults while maintaining a high fuel economy.
          Produced by multiple manufactures over its 60 year history,
          the Classic Mini's aesthetic did not change drastically from the original 1960 models.
          Mini went through multiple iterations that included several engine options,
          later models even included airbags and air conditioning.
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "TheCar",
  data() {
    return {};
  }
};


</script>

<style scoped lang="scss">
.top-banner {
  //max-height: 800px !important;
}

.container {
  max-height: inherit;
}

.v-toolbar {
  flex: none !important;
}
</style>