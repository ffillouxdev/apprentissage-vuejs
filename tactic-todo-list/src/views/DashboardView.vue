<script setup lang="ts">
/**
 * route (/).
 * Vue du dashboard des tâches.
 * Affiche des stats sur les tâches, les tâches terminées, à faire etc.
 * Si le titre est "Taux de tâches finies", on ajoute un symbole % après le chiffre.
 */
import CardTasksStatComponent from '@/components/dashboard/CardTaskStatComponent.vue';
import SpecificTaskValueComponent from '@/components/dashboard/SpecificTaskValueComponent.vue';
import type { CardTaskModel } from '@/models/CardTaskModel';
import type { SpecificTaskValueModel } from '@/models/SpecificTaskValueModel';
import { useTasksStore } from '@/store/tasks';
import { ref, watchEffect } from 'vue';

const store = useTasksStore(); // ce qui permet d'enregistrer et gérer les tâches
const cardTab = ref<CardTaskModel[]>([]);

// tableau qui forme les cartes contenant les tâches filtrées
const eachCardTabTasks = ref<SpecificTaskValueModel[]>([
  { title: "Toute(s) les tâche(s)", desc: "Toutes les tâches que vous avez ajoutées", noData: "Ajoutez des tâches pour voir les statistiques" },
  { title: "Tâche(s) urgente(s)", desc: "Tâches qui nécessitent votre attention immédiate", noData: "Tout est sous contrôle" },
  { title: "Tâche(s) à venir", desc: "Tâches prévues pour les 7 prochains jours", noData: "Votre semaine est libre" },
  { title: "Tâche(s) récente(s)", desc: "Tâches ajoutées ces 3 derniers jours", noData: "Ajoutez des tâches pour les voir ici" },
]);

watchEffect(() => {
  // tableau qui forment les cartes de stats en haut du dashboard
  cardTab.value = [
    { title: "Tâche(s) totale(s)", counter: store.getNumberOfTasks() },
    { title: "Tâche(s) terminée(s)", counter: store.getNumberOfFinishTasks() },
    { title: "Tâche(s) à faire", counter: store.getNumberOfTasksToDo() },
    { title: "Taux de tâche(s) finie(s)", counter: store.getTaskFinishRate() },
  ];
});
</script>

<template>
  <div class="flex flex-col space-y-5">
    <section>
      <h1 class="text-3xl font-bold">Dashboard</h1>
      <p class="text-base text-foreground-secondary">Bienvenue sur votre tableau de bord de gestion de tâches</p>
    </section>

    <div class="card-task-stats grid grid-cols-1 lg:grid-cols-2 xl:flex xl:space-x-5 space-y-2 lg:space-y-0 gap-5 xl:gap-0">
      <CardTasksStatComponent
        v-for="cardStat in cardTab"
        v-bind="cardStat"
        :key="cardStat.title"
      />
    </div>

    <div class="card-each-tasks grid grid-cols-1 xl:grid-cols-2 gap-4 2xl:w-2/3">
      <SpecificTaskValueComponent  v-for="cardTask in eachCardTabTasks" :key="cardTask.title" v-bind="cardTask"/>
    </div>
  </div>
</template>
