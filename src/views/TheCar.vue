<template>
  <v-container class="container" fluid dark>
    <v-row justify="space-around">
      <v-col cols="6" class="txt-box">
        <div class="white--text display-3 text-center">
          Classical Elegance
        </div>
        <v-layout class="align-center pa-3 ml-3 justify-center">
          <div class="white--text headline ">
            In 1959, Alec Issigonis was asked by BMC (British Motor Corporation)
            to develop a range of family cars that are extremely fuel efficient
            due to the fuel shortage caused by the 1956 Suez Crisis. One of
            these designs was what is now more commonly known as the classic
            Mini. While there there were many configurations of the compact
            vehicle, the overall asthetics remained the same throughout its
            entire lifetime.
          </div>
        </v-layout>
      </v-col>
      <v-col cols="6" class="mini">
        <v-img src="../assets/2ndMini.jpg" max-height="60vh" max-width></v-img>
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
.container {
  background-color: #343434;
  opacity: 78%;
}

.txt-box{
}
</style>
