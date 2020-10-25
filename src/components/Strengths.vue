<template>
  <v-container class="">
    <div
      class="pt-lg-4 pb-lg-4 pt-sm-4 pt-md-8 pt-8 text-lg-h3 text-xl-h3 text-md-h3 text-sm-h3 text-h5 text-center font-weight-light text-decoration-underline"
      align-content="center"
      justify-content="center"
    >
      {{ maintitle }}
    </div>
    <v-row class="align-center">
      <v-col class="col-xl-4 col-lg-4  offset-xl-2 offset-lg-2 parent">
        <div
          id="article1"
          class="text--grey pt-4 text-sm-subtitle-1 box"
          v-for="description in descriptions"
          :key="description.description"
          v-text="description.description"
        ></div>
      </v-col>
      <v-col class="col-4 hidden-sm-and-down">
        <div>
          <v-img height="400px" src="@/assets/smokemini.jpg"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    maintitle: "How the Classic Mini Stayed Strong",
    articleimage: "smokemini.jpg",
    descriptions: [
      {
        description:
          "While the Mini Cooper started out as a small English econobox from the mid-1900s, it has since seen an evolution from commuter car to an icon. Seldom would a classic car get this kind of attention this many years since its inception with the modern supercars coming to mind. As a car celebrated by celebrities and commoners alike, the Mini Cooper exceeds the expectations of what a classic car is. "
      },
      {
        description:
          "The Mini Cooper has impacted multiple generations of people. Seeing the members of the Beatles owning variants of the Mini Cooper to even celebrated people on Instagram today. Nobody expected such a small vehicle to captivate the eyes of so many which is a reason why car enthusiasts are still in awe."
      }
    ]
  }),
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.article1 {
  display: grid;
  place-items: center;
}

.ex1 .parent {
  display: grid;
  place-items: center;
}
</style>
