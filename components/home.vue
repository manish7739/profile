<template>
  <div>
    <!-- image start  -->
    <v-row class="justify-center mt-16">
      <v-avatar size="250">
        <v-img src="/manish.png" height="500px" width="40px"></v-img>
      </v-avatar> </v-row
    ><!-- image end -->

    <div class="text-center mt-5">
      <h1>I'M MANISH KUMAR</h1>
      <h4>I'm a Web Developer</h4>
    </div>
    <!-- icons start -->
    <v-row align="center" justify="center" class="mt-3">
      <v-icon>{{ icons.mdiFacebook }}</v-icon>
      <div class="mx-2"></div>
      <v-icon>{{ icons.mdiTwitter }}</v-icon>
      <div class="mx-2"></div>
      <v-icon>{{ icons.mdiInstagram }}</v-icon>
      <div class="mx-2"></div>
      <v-icon>{{ icons.mdiLinkedin }}</v-icon>
      <div class="mx-2"></div> </v-row
    ><!-- icons start -->
  </div>
</template>

<script>
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiLinkedin } from "@mdi/js";
export default {
  name: "Home",
  data: () => ({
    icons: {
      mdiFacebook,
      mdiTwitter,
      mdiInstagram,
      mdiLinkedin
    }
  })
};
</script>

<style lang="scss" scoped></style>
