<script setup lang="ts">
import { ref } from 'vue';
import EcritLignes from './components/EcritLignes.vue';
import GestionPunition from './components/GestionPunition.vue';

const punishment_sentence = ref("");
const gen_finish = ref(false);
const how_many_times_i_have_to_do_it = ref();

function handleSubmit(user_sentence: string, how_many_time_input: number): void {
  punishment_sentence.value = user_sentence;
  how_many_times_i_have_to_do_it.value = how_many_time_input;
  gen_finish.value = false; 
}

function handleGenerationFinish(generation_finish: boolean): void {
  gen_finish.value = generation_finish;
}

</script>

<template>
  <main class="p-1">
    <h1 class="text-2xl font-bold">Automatisateur de punitions</h1>
    <div class="flex flex-col space-y-2 my-3">
      <p>Petit exercice pour revoir les bases</p>
      <p>Il est important de limiter le copier-coller et de retaper du code.</p>
    </div>
    
    <GestionPunition :generation_finish="gen_finish" @submit="handleSubmit" />
    
    <EcritLignes 
      v-if="punishment_sentence && how_many_times_i_have_to_do_it !== null" 
      :sentence="punishment_sentence" 
      :how_many_times="how_many_times_i_have_to_do_it" 
      @finish="handleGenerationFinish"
    />
  </main>
</template>
