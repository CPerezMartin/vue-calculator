<template>
  <div class="body" v-text="text" :class="{ error: error }"></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CalculatorScreen",
  props: {
    text: { default: "0" },
    error: { default: false },
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/colors.scss";
.body {
  width: 14em;
  display: flex;
  justify-items: end;
  background-color: aliceblue;
  border-radius: 5px;
  color: $dark-vue-green;
  font-weight: bold;
  font-size: 2em;
  padding: 0.1em 0.25em;
  line-height: 1em;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: hidden;
  overflow-wrap: anywhere;
}
</style>
