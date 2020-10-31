<template>
  <v-container class="parent">
    <div id="quote" class="col-12 text-h2" align="center" justify="center">
      "{{ message }}"
    </div>
    <div align="center" justify="center">- me probably</div>
  </v-container>
</template>
<script>
export default {
  name: "Quote",
  data: () => ({
    message: "Nothing else is the same."
  }),
  created() {}
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
}
</style>
