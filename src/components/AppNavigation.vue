<template>
  <v-toolbar flat>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-tabs right>
      <v-tab>Item</v-tab>
    </v-tabs>
    <v-btn icon to="/thecar">
      <v-icon>mdi-car</v-icon>
    </v-btn>
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
      items: []
    };
  }
};
</script>

<style scoped lang="scss">
.v-toolbar {
  flex: none;
}
</style>
