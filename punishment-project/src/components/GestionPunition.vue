<script setup lang="ts">
import { ref } from 'vue';

const prop = defineProps<{ generation_finish : Boolean}>();

const user_sentence = ref("");
const how_many_time_input = ref(10);
const formIsSubmit = ref(false);

const emit = defineEmits<{
  'submit': [ user_sentence: string,  how_many_time_input: number ],
}>();

function handleSubmit () : void{
  formIsSubmit.value = true;
  emit('submit', user_sentence.value, how_many_time_input.value)
}

</script>
<template>
      <h2 class="text-center mb-3 font-bold">Nouvelle punition ?</h2>
      <p v-if="prop.generation_finish" class="validation-message w-full py-1 bg-lime-500 font-bold text-center rounded-xl">
        Votre punition est terminée.
      </p>
      <p v-if="formIsSubmit && !prop.generation_finish" class="validation-message w-full py-1 bg-yellow-500 font-bold text-center rounded-xl">
        Punition en cours d'écriture...
      </p>
    <form @submit.prevent="handleSubmit">
    <fieldset class="border-2 w-full p-2 rounded flex flex-col space-y-4 border-gray-400">
        <legend class="ml-2">Quelle ligne et combien de fois ?</legend>
        <div class="flex space-x-1.5 w-full">
          <label for="ligne" class="w-[150px]">Ligne à écrire</label>
          <input v-model="user_sentence" type="text" class="border-2 border-gray-300 w-full" id="ligne" name="ligne">
        </div>
        <div class="w-full">
          <label for="nombre" class="w-[150px]">Nombre de fois</label>
          <input type="number" class="border-2 ml-8 rounded border-gray-300 w-24" id="nombre" name="nombre" v-model="how_many_time_input">
        </div>
        <button 
          :disabled="formIsSubmit && !prop.generation_finish" 
          class="bg-gray-100 w-24 px-1 border hover:bg-gray-300 border-gray-500 rounded" 
          type="submit"
        >
  Valider
</button>
    </fieldset>
    </form>
</template>
<style>
</style>