<template>
  <div>
    <v-app-bar id="top-nav-bar" height="50" app color="white" flat>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title class="title">{{ appTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-tabs class="hidden-sm-and-down" right optional>
          <v-tab
            v-for="(name, i) in tabs"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="true"
            active-class="text--primary"
            class="font-weight-400"
            min-width="75"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>
    <home-drawer v-model="drawer" :tabs="tabs" />
  </div>
</template>

<script>
export default {
  name: "AppNavigation",
  components: {
    HomeDrawer: () => import("./Drawer")
  },
  props: {},
  data: () => ({
    appTitle: "Mini",
    drawer: null,
    isActive: false,
    tabs: ["Home", "TheCar"]
  }),
  methods: {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.title {
  overflow: auto;
}

#top-nav-bar {
  .v-tabs-slider {
    max-width: 24px;
    margin: 0 auto;
  }

  .v-tab {
    &::before {
      display: none;
    }
  }
}
</style>
