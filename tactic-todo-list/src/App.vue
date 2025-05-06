<script setup lang="ts">
/**
 * Composant principal permetant la structuration
 * des pages, et leurs générations.
 */
import { RouterView} from 'vue-router'
import SidebarComponent from './components/generals/SidebarComponent.vue';
import { useTasksStore } from '@/store/tasks';
import type { TaskModel } from '@/models/TaskModel';
import { ref } from 'vue';
import ModalComponent from './components/tasks/ModalComponent.vue';

const store = useTasksStore(); // permet la gestion des tâches dans toutes les pages du router
const isClicked = ref(false);

function handleModalClick(): void{
  isClicked.value = !isClicked.value;
}

function handleAddTask(task : TaskModel) : void{
  store.addStore(task);
}
</script>

<template>
  <div class="flex h-screen">
    <SidebarComponent @open-modal="handleModalClick" />
    <main class="flex-1 bg-background px-2 md:px-7 py-10 md:py-5 overflow-auto">
      <RouterView />
    </main>
      <div v-if="isClicked" class="modal-container">
        <ModalComponent key="addTaskModal" type="Ajouter" @closed-modal="handleModalClick" @add-task="handleAddTask"/>
      </div>
    </div>
</template>

<style scoped>

</style>
