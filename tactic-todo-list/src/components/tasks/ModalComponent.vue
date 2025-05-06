
<script setup lang="ts">
/**
 * Composant modal d'ajout ou de modifier une tâche,
 * Une modal est un élément qui se met au premier plan
 * et qui enlève la possibilité de cliquer derrière elle
 */
import { X } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';
import BlackButtonComponent from '../generals/BlackButtonComponent.vue';
import type { TaskModel } from '@/models/TaskModel';

const todayDate = new Date().toISOString().split('T')[0]; 
const title = ref("");
const desc = ref("");
const priority = ref("");
const dueDate = ref("");
const {type, task } = defineProps<{
  type: "Ajouter" | "Editer",
  task?: TaskModel
}>();

const emit = defineEmits<{
  (e: "closedModal"): void;
  (e: "addTask", task: TaskModel): void;
  (e: "editTask", task: TaskModel): void;
}>()

const closeModal = () => {
  emit("closedModal")
}

function handleKeyDown(e : KeyboardEvent) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

// Gestion de la fermeture de la modal par le bouton de clavier 'échap'
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  if (type === "Editer" && task) {
    title.value = task.title || "";
    desc.value = task.desc || "";
    priority.value = task.priority || "";
    dueDate.value = task.dueDate || "";
  }
});

// Gestion de la fermeture de la modal par le bouton de clavier 'échap'
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

/**
 * Fonction de submission pour ajouter ou éditer l'élément
 */
function handleSubmitTask(): void {
  if (!priority.value || !title.value) return;

  const baseTask: TaskModel = {
    id: type === "Ajouter" ? Date.now() : task?.id ?? Date.now(),
    title: title.value,
    desc: desc.value,
    dueDate: dueDate.value,
    priority: priority.value as "Basse" | "Moyenne" | "Haute",
    isDone: task?.isDone ?? false,
    createAt: new Date().toISOString(),
  };

  if (type === "Ajouter") {
    emit("addTask", baseTask);
  } else {
    emit("editTask", baseTask);
  }

  emit("closedModal");
}


</script>
<template>
  <div class="fixed inset-0 bg-black/30 flex items-center justify-center z-40">
    <div class="bg-white rounded-md z-50 text-foreground-primary p-6 shadow-lg w-full max-w-md relative">
      <button
        @click.prevent="closeModal"
        class="absolute top-2 right-2 text-gray-500 hover:text-foreground-primary"
        aria-label="Close"
      >
        <X />
      </button>
      <h3 class="text-base font-bold text-foreground-primary mb-3">{{ type }} une tâche</h3>
      <form class="flex flex-col w-full justify-center space-y-2">
        <label for="title">Titre*</label>
        <input class="border py-2 rounded-sm pl-1 text-gray-700" v-model="title" placeholder="Faire les courses" name="title" type="text" />
        <label for="desc">Description</label>
        <textarea class="border resize-none py-2 rounded-sm pl-1 text-gray-700" v-model="desc" :placeholder="`Vous pouvez ${type.toLowerCase()} la description`" name="desc" type="text" />
        <label for="dueDate">Date d’échéance</label>
        <input class="border py-2 rounded-sm pl-1 text-gray-700" v-model="dueDate" name="dueDate" type="date" :min="todayDate"/>
        <select v-model="priority" class="border py-2 mt-4 rounded-sm pl-1 text-foreground-primary" name="priority" id="priority">
            <option disabled value="">Sélectionner une priorité</option>
            <option value="Basse">🟢 Basse</option>
            <option value="Moyenne">🟠 Moyenne</option>
            <option value="Haute">🔴 Haute</option>
        </select>
        <BlackButtonComponent
          :text="type === 'Ajouter' ? 'Valider' : 'Editer'"
          @click.prevent="handleSubmitTask"
        />
      </form>
    </div>
  </div>
</template>


<style scoped>
</style>
