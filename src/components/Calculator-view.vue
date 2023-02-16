<script setup lang="ts">
import CalculatorScreen from "./Screen.vue";

</script>

<template>
  <div class="greetings">
    <h1 class="green">Vue Calculator</h1>
  </div>
  <div class="calculator-grid">
    <CalculatorScreen :text="screenTxt" class="calculator-screen"/>
    <button id="clear" class="button std">Clear</button>
    <button id="div" class="button std">/</button>
    <button id="mult" class="button std">*</button>
    <button id="minus" class="button std">-</button>
    <button v-for="number in ['7', '8', '9']" :key="number" class="button std">
      {{ number }}
    </button>
    <button id="plus" class="button high">+</button>
    <button v-for="number in ['4', '5', '6']" :key="number" class="button std">
      {{ number }}
    </button>
    <button v-for="number in ['1', '2', '3']" :key="number" class="button std">
      {{ number }}
    </button>
    <button id="result" class="button high">=</button>
    <button id="zero" class="button wide">0</button>
    <button id="period" class="button std">.</button>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.calculator-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.2em;
}
.calculator-screen {
  border: 1px black solid;
  height: 5em;

  grid-row: 1/2;
  grid-column: 1/5;
}
#plus {
  grid-row: 3/5;
  grid-column: 4;
}
#result {
  grid-column: 4;
  grid-row: 5/7;
}

#zero {
  grid-column: 1/3;
  grid-row: 6;
}

.button {
  &.std {
    width: 5em;
    height: 5em;
  }
  /* &.high {
    width: 5em;
    height: 10em;
  }

  &.wide {
    width: 10em;
    height: 5em;
  } */
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
