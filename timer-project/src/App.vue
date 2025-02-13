<script setup lang="ts">
import Counter from './components/Counter.vue';
import type { CounterModel } from './models/CounterModel';



const tabCounters: CounterModel[] = [
  {id:'1', mode: 'normal', debut : 5},
  {id:'2', mode: 'joli', debut : 0}
] 


</script>

<template>
  <main>
    <Counter v-for="item in tabCounters" key="item.id" :id="item.id" :mode="item.mode" :debut="item.debut"/>
  </main>
</template>

<style scoped>
  main{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 95vh;
  }
</style>
