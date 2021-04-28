<template>
  <div>
    <about />
    <about-2 />
  </div>
</template>

<script>
import about from "~/components/about.vue";
import About2 from "~/components/about2.vue";
export default {
  components: { about, About2 },
  name: "About"
};
</script>

<style lang="scss" scoped></style>
