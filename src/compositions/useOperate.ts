import { ref } from "vue";
import { OPERATORS } from "@/shared/constants";

export function useOperate() {
  const memory = ref("0");
  const error = ref(false);
  const clearNext = ref(false);

  function clear() {
    memory.value = "0";
    error.value = false;
    clearNext.value = false;
  }

  function deleteLast() {
    if (!memory.value.length) return;
    if (memory.value.length === 1) {
      clear();
    } else {
      memory.value = memory.value.slice(0, memory.value.length - 1);
      clearNext.value = false;
      error.value = false;
    }
  }

  function isOperator(operator: string) {
    return OPERATORS.includes(operator);
  }

  function lastCharIsOperator(string: string) {
    const stringNormalized = string.replace(/\s/g, "");
    return isOperator(stringNormalized[stringNormalized.length - 1]);
  }

  function addDigit(digit: string) {
    const lastDigit = memory.value[memory.value.length - 1];

    if (clearNext.value) clear();
    if (memory.value === "0" && digit === "0") return;
    if (lastDigit === "." && digit === ".") return;
    if (memory.value === "0" && memory.value.length === 1 && digit !== ".") {
      memory.value = digit;
    } else {
      if (
        (!memory.value || lastCharIsOperator(memory.value)) &&
        digit === "."
      ) {
        memory.value += "0";
      }
      memory.value += `${digit}`;
    }
  }

  function addOperator(operator: string) {
    if (clearNext.value) {
      clear();
    } else {
      if (!memory.value && operator !== "-") return;
      if (memory.value === "-") return;
      if (lastCharIsOperator(memory.value)) {
        memory.value = memory.value.slice(0, memory.value.length - 1);
      }
      memory.value += `${operator}`;
    }
  }

  function calculate() {
    if (!memory.value) return;
    if (lastCharIsOperator(memory.value)) {
      deleteLast();
    }

    try {
      memory.value = `${eval(memory.value)}`;
    } catch (_) {
      error.value = true;
      clearNext.value = true;
      memory.value = "Expression invalid";
    }
  }

  return {
    memory,
    deleteLast,
    addDigit,
    addOperator,
    calculate,
    clear,
  };
}
