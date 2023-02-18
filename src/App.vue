<script setup lang="ts">
import Calculator from "./components/Calculator-view.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <h1 class="title">Vue Calculator</h1>
  </header>
  <div class="wrapper">
    <Calculator />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/colors.scss";
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

header {
  display: flex;
  place-items: center;
  .title {
    font-weight: bolder;
    font-size: 30px;
    color: $light-vue-green;
  }
}

.logo {
  margin: 0 2rem 0 0;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>
