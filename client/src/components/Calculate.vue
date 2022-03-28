<template>
  <form v-on:submit.prevent="onSubmit" class="form">
    <label for="hours">Количество часов работы</label>
    <input
      id="hours"
      v-model="hours"
      type="number"
      placeholder="Количество часов работы"
    />
    <label for="rass">Стоимость расходников (по-умолчанию 40)</label>
    <input
      id="rass"
      v-model="rass"
      type="number"
      placeholder="Стоимость расходников (по-умолчанию 40)"
    />
    <label for="oneHour">Стоимость одного часа (по-умолчанию 30)</label>
    <input
      id="oneHour"
      v-model="oneHour"
      type="number"
      placeholder="Стоимость одного часа (по-умолчанию 30)"
    />
    <label for="coef">Коэффициент часа (по-умолчанию 1.2)</label>
    <input
      id="coef"
      v-model="coef"
      type="number"
      step="0.1"
      placeholder="Коэффициент часа (по-умолчанию 1.2)"
    />
    <input type="submit" />
  </form>
  <div v-if="result" class="result">
    Примерная стоимость: <br />
    <b>{{ result }} руб.</b>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';

@Options({
  props: {
    hours: Number,
    rass: Number,
    oneHour: Number,
    coef: Number,
    result: Number,
  },
})
export default class Calculate extends Vue {
  hours = 1;
  rass = 40;
  oneHour = 30;
  coef = 1.2;
  result = 0;
  async calc(request: any) {
    const data = await axios.post(`api/calc`, request);
    console.log(data);
    this.result = data.data;
  }
  onSubmit() {
    const request = {
      hours: this.hours,
      rass: this.rass,
      oneHour: this.oneHour,
      coef: this.coef,
    };
    this.calc(request);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 20px;
  margin: 10px auto;
}
input {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
}
input[type='submit'] {
  background: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 2px;
  color: #fff;
}
input[type='submit']:hover {
  background: #384f65;
}
label {
  font-size: 14px;
  font-style: italic;
  margin: 5px;
}
.result {
  padding: 0 20px;
  color: #2c3e50;
  font-size: 22px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
