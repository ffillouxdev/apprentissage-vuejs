<script setup lang="ts">
/**
 * Composant de la page dashboard qui permet de trié les éléments
 * selon plusieurs types de filtre
 */
import type { SpecificTaskValueModel } from '@/models/SpecificTaskValueModel';
import type { TaskModel } from '@/models/TaskModel';
import { useTasksStore } from '@/store/tasks';
import { ArrowRight, CheckCircle2, CircleAlert, Clock9, SquareCheckBig, Tag } from 'lucide-vue-next';
import { ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
import TaskComponent from '@/components/tasks/TaskComponent.vue';

const props = defineProps<SpecificTaskValueModel>();
const store = useTasksStore();
const filteredTabItems = ref<TaskModel[]>([]);

/**
 * fonction qui permet de filtrer les données du store
 * en fonction du card dans lequel il se trouve.
 * Les différents card sont 'Toute(s) les tâche(s)',
 * 'Tâche(s) urgente(s)', 'Tâche(s) à venir', 'Tâche(s) récente(s)'
*/
function filterData() {
  const allTasks = store.tabTasks ?? [];
  switch (props.title) {
    case "Tâche(s) urgente(s)":
      filteredTabItems.value = allTasks.filter(task => task.priority === "Haute" && !task.isDone);
      break;
    case "Tâche(s) à venir":
      filteredTabItems.value = store.getInComingTasks();
      break;
    case "Tâche(s) récente(s)":
    filteredTabItems.value = store.getRecentTasks();
      break;
    case "Toute(s) les tâche(s)":
      filteredTabItems.value = allTasks;
      break;
    default:
      filteredTabItems.value = [];
  }
}

watchEffect(() => {
  filterData();
});
function handleModifyTaskIsDone(id : number){
  store.changePropIsDoneValue(id);
}

function handleDeleteTask(id : number){
  store.deleteTask(id);
}

</script>
<template>
    <div class="border flex flex-col border-gray-200 rounded-md p-6 w-full">
        <div class="flex justify-between items-center">
          <div class="flex space-x-2 items-center">
            <CircleAlert v-if="props.title === 'Tâches urgentes'" class="text-red-500 w-5 h-auto" />
            <Clock9 v-else-if="props.title === 'Tâches à venir'" class="text-blue-500 w-5 h-auto" />
            <SquareCheckBig v-else-if="props.title === 'Tâches récentes'" class="w-5 h-auto" />
            <Tag v-else-if="props.title === 'Toutes les tâches'" class="w-5 h-auto"/>
            <h3 class="font-semibold text-lg">{{ props.title }}</h3>
          </div>
          <RouterLink
            :to="`/tâches?filter=${props.title.replace(/\s+/g, '-').toLowerCase()}`"
            class="font-bold text-sm flex items-center text-black hover:text-blue-600"
          >
            <span>Voir plus</span>
            <ArrowRight class="w-4 h-auto ml-1" />
          </RouterLink>
        </div>

        <p class="text-base ml-1 mt-1 text-foreground-secondary">{{ props.desc }}</p>

        <div v-if="filteredTabItems.length" class="specific-tasks mt-4 flex flex-col space-y-1">
          <TaskComponent @task-delete="handleDeleteTask" @task-done="handleModifyTaskIsDone" v-for="task in filteredTabItems.slice().sort((taskT, taskF)=> Number(taskT.isDone) - Number(taskF.isDone))" v-bind="task" :key="task.id"/>
        </div>
        <div v-else class="no-specific-tasks flex items-center flex-col justify-center mt-6 text-gray-400">
          <CheckCircle2 class="w-10 text-green-600 mb-2 h-auto"/>
          <h4 class="text-base font-semibold text-foreground-primary">Aucune {{ props.title.toLowerCase() }}</h4>
          <p class="text-sm mt-0.5">{{ props.noData }}</p>
        </div>
      </div>
</template>
