<template>
  <v-footer padless>
    <v-row justify="center" no-gutters>
      <strong class="align-self-center"
        >Thanks to Steveston Motor Co for the Images! -
      </strong>
      <v-btn
        v-for="link in links"
        :key="link"
        color="black"
        text
        rounded
        v-bind:href="link.src"
        class="my-2"
      >
        {{ link.title }}
      </v-btn>
      <v-col class="lighten-2 py-4 text-center black--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        src: "https://www.youtube.com/channel/UC4hs5upWd7j9ligDbWEgF3w",
        title: "Youtube"
      },
      {
        src: "https://stevestonmotorco.com/",
        title: "Their Website"
      },
      {
        src: "https://www.instagram.com/stevestonmotorco/",
        title: "Instagram"
      }
    ]
  })
};
</script>

<style lang="scss" scoped></style>
