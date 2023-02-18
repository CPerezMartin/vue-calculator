<template>
  <div class="body" v-text="text"></div>
</template>
<script lang="ts">
import { defineComponent, ref, readonly } from "vue";
export default defineComponent({
  name: "CalculatorScreen",
  props: {
    text: { default: "" },
  },
});
</script>
<style lang="scss" scoped>
.body {
  display: flex;
  justify-items: end;
  border-radius: 2%;
  font-weight: bold;
  font-size: 2em;
  padding: 0 0.25em;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
