<template>
  <v-toolbar desne flat>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>{{appTitle}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon to="/thecar">
      <v-icon>mdi-car</v-icon>
    </v-btn>
    <!--<v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>-->
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      appTitle: "Mini",
      drawer: false,
      expandOnHover: false,
      items: [{ title: "The Car" }, { title: "Variations" }, { title: "Join" }]
    };
  }
};
</script>

<style scoped lang="scss">
.v-toolbar {
  flex: none;
}
</style>
