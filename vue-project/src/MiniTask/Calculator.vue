<template>
  <div class="calculator">
    <input v-model="displayValue" value="0" disabled />
    <div class="calculator-keys">
      <button type="button" @click="handleOperator('+')" class="operator" value="+">+</button>
      <button type="button" @click="handleOperator('-')" class="operator" value="-">-</button>
      <button type="button" @click="handleOperator('*')" class="operator" value="*">&times;</button>
      <button type="button" @click="handleOperator('/')" class="operator" value="/">&divide;</button>

      <button type="button" @click="handleClick" value="7">7</button>
      <button type="button" @click="handleClick" value="8">8</button>
      <button type="button" @click="handleClick" value="9">9</button>

      <button type="button" @click="handleClick" value="4">4</button>
      <button type="button" @click="handleClick" value="5">5</button>
      <button type="button" @click="handleClick" value="6">6</button>

      <button type="button" @click="handleClick" value="1">1</button>
      <button type="button" @click="handleClick" value="2">2</button>
      <button type="button" @click="handleClick" value="3">3</button>

      <button type="button" @click="handleClick" value="0">0</button>
      <button type="button" @click="handleClick" class="decimal" value=".">
        .
      </button>
      <button type="button" @click="resetCalculator" value="all-clear">
        AC
      </button>

      <button type="button" @click="handleOperator('=')" class="equal-sign operator" value="=">=</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const displayValue = ref("0");
const firstOperand = ref(null);
const waitingForSecondOperand = ref(false);
const operator = ref(null);

const performCalculation = {
  "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
  "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
  "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
  "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
  "=": (firstOperand, secondOperand) => secondOperand,
};

const handleClick = (event) => {
  if (waitingForSecondOperand.value) {
    displayValue.value = event.target.value;
    waitingForSecondOperand.value = false;
  } else {
    displayValue.value =
      displayValue.value == "0"
        ? event.target.value
        : (displayValue.value += event.target.value);
  }
};
const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(displayValue.value);
  
    if (operator.value && waitingForSecondOperand.value) {
      operator.value = nextOperator;
      return;
    }
  
    if (firstOperand.value === null && !isNaN(inputValue)) {
      firstOperand.value = inputValue;
    } else if (operator.value) {
      const result = performCalculation[operator.value](firstOperand.value, inputValue);
      displayValue.value = `${parseFloat(result.toFixed(7))}`;
      firstOperand.value = result;
    }
  
    operator.value = nextOperator;
    waitingForSecondOperand.value = true;
};

function resetCalculator() {
  displayValue.value = "0";
  firstOperand.value = null;
  waitingForSecondOperand.value = false;
  operator.value = null;
}
</script>


<style scoped>
.calculator {
  width: 400px;
  height: fit-content;
  background: #222;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.calculator-screen {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  font-size: 2em;
  text-align: right;
  overflow: hidden;
}

.calculator-keys {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

input{
    height: 60px;
  font-size: 1.5em;
  border-radius: 10px;

}
input:disabled{
    background-color: #f2f2f2;
}

button {
  height: 60px;
  font-size: 1.5em;
  border-radius: 10px;
  border: none;
  background: #f2f2f2;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s, transform 0.1s;
}

button.operator {
  background: #f29c24;
  color: #fff;
}

button.equal-sign {
  background: #f29c24;
  color: #fff;
  grid-column: span 2;
}

button.decimal {
  background: #ff9b9b;
  color: #fff;
}

button:active {
  background: #ccc;
  transform: scale(0.98);
}

button.operator:active,
button.equal-sign:active,
button.decimal:active {
  background: #e08b00;
}

button.all-clear {
  background: #ff6b6b;
  color: #fff;
}

button.all-clear:active {
  background: #e04b4b;
}

@media (max-width: 400px) {
  .calculator {
    width: 100%;
    height: auto;
    margin: 50px auto;
    padding: 10px;
  }

  .calculator-keys {
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }

  button {
    height: 50px;
    font-size: 1.2em;
  }
}

</style>