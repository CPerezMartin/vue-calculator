<template>
  <div class="calculator-grid">
    <CalculatorScreen
      :text="operate.memory.value"
      class="calculator-screen"
      :error="operate.error.value"
    />
    <button id="clear" class="button std invert-color" @click="operate.clear()">
      Clear
    </button>
    <button id="div" class="button std" @click="operate.addOperator('/')">
      /
    </button>
    <button id="mult" class="button std" @click="operate.addOperator('*')">
      *
    </button>
    <button id="minus" class="button std" @click="operate.addOperator('-')">
      -
    </button>
    <button
      v-for="number in ['7', '8', '9']"
      :key="number"
      class="button std"
      @click="operate.addDigit(number)"
    >
      {{ number }}
    </button>
    <button id="plus" class="button" @click="operate.addOperator('+')">
      +
    </button>
    <button
      v-for="number in ['4', '5', '6']"
      :key="number"
      class="button std"
      @click="operate.addDigit(number)"
    >
      {{ number }}
    </button>
    <button
      v-for="number in ['1', '2', '3']"
      :key="number"
      class="button std"
      @click="operate.addDigit(number)"
    >
      {{ number }}
    </button>
    <button id="result" class="button" @click="operate.calculate()">=</button>
    <button id="zero" class="button" @click="operate.addDigit('0')">0</button>
    <button id="period" class="button" @click="operate.addDigit('.')">.</button>
    <button id="del" class="button invert-color" @click="operate.deleteLast()">
      Del
    </button>
  </div>
</template>

<script setup lang="ts">
import CalculatorScreen from "@/components/Screen.vue";
import { useOperate } from "@/compositions/useOperate";

const operate = useOperate();
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.calculator-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.2em;
}
.calculator-screen {
  border: 2px solid $light-vue-green;
  height: 5rem;

  grid-row: 1/2;
  grid-column: 1/5;
  &.error {
    border-color: red;
  }
}
#plus {
  grid-column: 4;
}
#result {
  grid-column: 4;
  grid-row: 4/6;
}

#zero {
  grid-column: 1/3;
  grid-row: 6;
}

.button {
  min-width: 5em;
  min-height: 5em;
  color: $light-vue-green;
  font-weight: 700;
  font-size: 16px;
  background-color: $dark-vue-green;
  border: 1px solid $light-vue-green;
  border-radius: 5px;

  &:hover {
    border-width: 3px;
  }

  &:active {
    color: $dark-vue-green;
    background-color: $light-vue-green;
    border: 3px solid $dark-vue-green;
  }
  &.invert-color {
    color: $dark-vue-green;
    background-color: $light-vue-green;
    border: 1px solid $dark-vue-green;

    &:hover {
      border-width: 3px;
    }

    &:active {
      color: $light-vue-green;
      background-color: $dark-vue-green;
      border: 3px solid $light-vue-green;
    }
  }
}
</style>
