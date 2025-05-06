<script setup lang="ts">
/**
 * Composant pour standariser un bouton noir,
 * il est utilisé pour l'ajout des tâches,
 * valider le formulaire d'ajout et editer une tâche
 */
import { BadgeCheck, BadgePlus, Edit2Icon } from 'lucide-vue-next';

const {text} = defineProps<{
  text : string,
}>()
</script>
<template>
  <button
  class="bg-black py-2 px-3  rounded-md flex items-center justify-center text-white text-sm active:scale-95 transition transform duration-100"
  >
  <BadgePlus v-if="text === 'Ajouter une tâche'" class="w-5 h-auto"/>
  <BadgeCheck v-if="text === 'Valider'" class="w-5 h-auto"/>
  <span class="ml-2">{{ text }}</span>
  <Edit2Icon  v-if="text === 'Editer'" class="w-4 ml-1 h-auto"/>
  </button>
</template>
