<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row
          align="center"
          justify="space-around"
          class="mt-4"
        >
        </v-row>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
  @import "../node_modules/@aasaam/noto-font/dist/font-face.css";
  body {
    direction: rtl;
    margin: 0;
    font-family: "aasaam-Noto", sans-serif;
  }
  .v-form,
  .v-btn,
  .v-card__text {
    font-family: "aasaam-Noto", sans-serif;
  }
</style>