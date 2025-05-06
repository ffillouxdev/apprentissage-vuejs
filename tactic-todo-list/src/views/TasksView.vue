<script setup lang="ts">
/**
 * Route (/tâches)
 * Vue des tâches rangées dans 4 catégories:
 * - Priorité basse
 * - Prioté moyenne
 * - Priorité haute
 * - Toutes les tâches finies
 */
import ModalComponent from '@/components/tasks/ModalComponent.vue';
import TaskComponent from '@/components/tasks/TaskComponent.vue';
import type { TaskModel } from '@/models/TaskModel';
import { useTasksStore } from '@/store/tasks';
import { Search, X } from 'lucide-vue-next';
import {CheckCircle, Edit2Icon, Trash2Icon } from 'lucide-vue-next';
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const store = useTasksStore();
const searchText = ref("");
let filteredTasks = ref(store.tabTasks);
let filterActived = ref(false);
const editTask = ref<TaskModel | null>(null);
const isEditTask = ref(false);

function handleModifyTaskIsDone(id : number): void{
  store.changePropIsDoneValue(id);
}

function handleSearchTask(){
  if (!searchText.value) {
    filteredTasks.value = store.tabTasks;
  }else{
    console.log(searchText.value)
    if (!store.tabTasks) return [];
    filterActived.value = true;
    filteredTasks.value = store.tabTasks.filter(task => task.title.toLowerCase().includes(searchText.value.toLowerCase()))
  }
}

function handleRevomeSearchFilter() : void{
  filterActived.value = false;
  filteredTasks.value = store.tabTasks;
  searchText.value = "";
}

function handleModalClick(task: TaskModel | null = null): void {
  editTask.value = task;
  isEditTask.value = !!task;
}

function handleUpdateTask(task: TaskModel): void {
  store.updateTask(task);
  isEditTask.value = false;
}

function handleDeleteTask(id: number): void{
  store.deleteTask(id);
}

const route = useRoute();
const filter = route.query.filter as string;
watchEffect(()=>{
  if (filter){
    switch (filter){
      case "toute(s)-les-tâche(s)":
        console.log(filter)
        filteredTasks.value = store.tabTasks ?? [];
        break;

      case  "tâche(s)-urgente(s)":
        filteredTasks.value = store.tabTasks?.filter(task => task.priority === "Haute") ?? [];
      break;

      case "tâche(s)-à-venir":
        filteredTasks.value = store.getInComingTasks();
      break;

      case "tâche(s)-récente(s)":
        filteredTasks.value = store.getRecentTasks();
        break;

      default:
        filteredTasks.value = store.tabTasks ?? [];
        break;
    }
  }
});

</script>
<template>
    <section>
      <h1 class="text-3xl font-bold">Gestion des tâches</h1>
      <p class="text-base text-foreground-secondary">Ici vous pouvez modifier la priorité de vos tâches et les supprimer etc...</p>
    </section>
    <div class="flex flex-col space-y-3 mt-3">
      <div class="flex items-center">
        <form action="" @submit.prevent="handleSearchTask" class="flex items-center gap-2 border border-gray-300 rounded-md pl-1 py-2 max-w-xs shadow">
          <button type="submit" class="hover:scale-110 transition transform duration-100"><Search class="text-gray-500" /></button>
          <input
          type="text"
          class="flex-1 bg-transparent focus:outline-none text-foreground-primary placeholder-gray-400"
          placeholder="Rechercher..."
          aria-label="Champ de recherche"
          v-model="searchText"
          />
        </form>
        <button v-if="filterActived" @click.prevent="handleRevomeSearchFilter" class="filtre text-sm ml-2 flex items-center">
          <X/>
          <span>Enlever le filtre</span>
        </button>
      </div>

      <div class="pl-2 space-y-1 mt-3">
        <div class="flex items-center space-x-2">
          <CheckCircle class="w-5 h-auto"/>
          <p class="text-sm text-foreground-secondary">Pour valider vos tâches.</p>
        </div>
        <div class="flex items-center space-x-2">
          <Edit2Icon class="w-5 h-auto"/>
          <p class="text-sm text-foreground-secondary">Pour éditer vos tâches.</p>
        </div>
        <div class="flex items-center space-x-2">
          <Trash2Icon class="w-5 h-auto"/>
          <p class="text-sm text-foreground-secondary">Pour supprimer vos tâches.</p>
        </div>
      </div>
  </div>
  <div v-if="filteredTasks" class="tasks w-full h-full flex flex-col space-y-5 2xl:grid 2xl:grid-cols-4 2xl:space-x-2 mt-10">
    <div class="border border-gray-200 p-5 h-full rounded-md space-y-2">
      <h2 class="font-bold text-lg flex items-center">
        <span class="rounded-full w-2 h-2 bg-green-600 mr-1"></span>
        Priorité basse
      </h2>
      <TaskComponent v-for="task in filteredTasks.filter((task=> task.priority === 'Basse'&& !task.isDone))" v-bind="task" @task-done="handleModifyTaskIsDone" @task-edit="handleModalClick" :key="task.id"/>
    </div>
    <div class="border border-gray-200 p-5 h-full rounded-md space-y-2">
      <h2 class="font-bold text-lg flex items-center">
        <span class="rounded-full w-2 h-2 bg-orange-300 mr-1"></span>
        Priorité moyenne
      </h2>
      <TaskComponent v-for="task in filteredTasks.filter((task=> task.priority === 'Moyenne'&& !task.isDone))" v-bind="task" @task-done="handleModifyTaskIsDone" @task-edit="handleModalClick" :key="task.id"/>
    </div>
  <div class="border border-gray-200 p-5 h-full rounded-md space-y-2">
    <h2 class="font-bold text-lg flex items-center">
      <span class="rounded-full w-2 h-2 bg-red-500 mr-1"></span>
      Priorité haute
    </h2>
    <TaskComponent v-for="task in filteredTasks.filter((task=> task.priority === 'Haute' && !task.isDone))" v-bind="task" @task-done="handleModifyTaskIsDone" @task-edit="handleModalClick" :key="task.id"/>
    </div>
  <div class="border border-gray-200 p-5 h-full rounded-md space-y-2">
    <h2 class="font-bold text-lg flex items-center">
      <CheckCircle class="w-5 h-auto mr-1"/>
      Tâches réalisées
    </h2>
    <TaskComponent v-for="task in filteredTasks.filter((task=> task.isDone))" v-bind="task"  @task-done="handleModifyTaskIsDone" @task-delete="handleDeleteTask" :key="task.id"/>
    </div>
  </div>
  <div v-else class="no-tasks w-full h-full flex items-start justify-center mt-10">
    <p>Vous n'avez ajouté aucune tâches...</p>
  </div>
  <div v-if="isEditTask && editTask">
  <ModalComponent key="editTaskModal"dessignace type="Editer" :task="editTask" @edit-task="handleUpdateTask" @closed-modal="() => handleModalClick(null)"/>
</div>

</template>

<style scoped>
</style>



