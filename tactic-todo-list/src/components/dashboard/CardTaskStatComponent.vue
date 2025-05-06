<script setup lang="ts">
import type { CardTaskModel } from '@/models/CardTaskModel';

/**
 * Composant de statistique sur les tâches.
 * Affiche un titre et une valeur numérique.
 * Si le titre est "Taux de tâches finies", on ajoute un symbole % après le chiffre.
 */
const props = defineProps<CardTaskModel>()

let percent = props.title === "Taux de tâche(s) finie(s)" ? "%" : "";
</script>
<template>
  <div class="border border-gray-200 rounded-md p-10 w-full xl:w-62">
    <p className="text-sm font-medium">{{ props.title}}</p>
    <p class="mt-2 text-4xl font-bold">{{ props.counter }} {{ percent }} </p>
  </div>
</template>
