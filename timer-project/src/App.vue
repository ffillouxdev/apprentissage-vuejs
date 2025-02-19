<script setup lang="ts">
import Counter from './components/Counter.vue';
import type { CounterModel } from './models/CounterModel';
import { ref, toValue } from 'vue';



const tabCounters = ref<CounterModel[]>([
  {id:'1', mode: 'normal', debut : 5},
  {id:'2', mode: 'joli', debut : 0}
  ]);


//    <Counter v-for="item in tabCounters" key="item.id" :id="item.id" :mode="item.mode" :debut="item.debut"/>
function deleteApp(id : string) :void{
  console.log("il faut suppr le compteur de l'id : " + id);
  tabCounters.value = tabCounters.value.filter((elt) =>elt.id !== id);
  console.log(tabCounters);
}

</script>

<template>
  <main>
    <Counter 
    v-for="item in tabCounters"
    key="item.id"
    :counter="item"
    @supprimer="deleteApp"
    />
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
