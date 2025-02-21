<script setup lang="ts">
import EcritLignes from './components/EcritLignes.vue';
import GestionPunition from './components/GestionPunition.vue';



function handleSubmit(user_sentence : string, how_many_time_input : number) : void{
  console.log(user_sentence, how_many_time_input )
}
</script>
<template>
  <main class="p-1">
    <h1 class="text-2xl font-bold">Automatisateur de punitions</h1>
    <div class="flex flex-col space-y-2 my-3">
      <p>Petit exercice pour revoir les bases</p>
      <p>Il est important de limiter le copier-coller et de retaper du code.</p>
    </div>
    <GestionPunition @submit="handleSubmit"/>
    <EcritLignes />
   
  </main>
</template>

<style scoped>
</style>
