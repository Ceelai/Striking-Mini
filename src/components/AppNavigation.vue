<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      :expand-on-hover="expandOnHover"
      class="grey darken-4"
      dark
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-content>
              <v-btn text>{{ item.title }}</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="grey darken-4" elevate-on-scroll dark>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer class="hidden-md and up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title class>{{ appTitle }}</v-toolbar-title>
      </router-link>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/thecar">The Car</v-btn>
        <v-btn text to="/variations">Variations</v-btn>
      </v-toolbar-items>
      <v-spacer class="hidden-md and up"></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "Striking Mini",
      drawer: false,
      expandOnHover: false,
      items: [{ title: "The Car" }, { title: "Variations" }, { title: "Join" }]
    };
  }
};
</script>

<style scoped>
a {
  color: white !important;
  text-decoration: none;
}
</style>
