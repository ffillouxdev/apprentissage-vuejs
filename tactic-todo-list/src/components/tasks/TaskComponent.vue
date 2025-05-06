  <script setup lang="ts">
  /**
   * Composant tâche, il permet d'afficher les éléments du tableau store
   * il est affiché dans le dashboard et la vue de tâches
   */
  import type { TaskModel } from '@/models/TaskModel';
  import {CheckCircle, Edit2Icon, Trash2Icon } from 'lucide-vue-next';
  import { useRoute } from 'vue-router';

  const props = defineProps<TaskModel>();
  const route = useRoute();

  const emit = defineEmits<{
    (e: "task-done", id: number): void,
    (e: "task-edit", id: TaskModel): void,
    (e: "task-delete", id: number): void
  }>();

  /**
   * Fonction qui permet de dire au composant parent
   * que le composant, que cette tâche est terminée
   */
  const handleCheckTask = () =>{
    emit("task-done", props.id)
  };

   /**
   * Fonction qui permet de dire au composant parent
   * que l'user veut modifier les valeurs de cette
   * tâche, le bouton lié à la fonction n'est visible
   * que dans la vue tâche.
   */
  const handleEditTask = () =>{
    emit("task-edit", props)
  }

  /**
   * Fonction qui permet de dire au composant parent
   * que l'user veut supprimer cette tâche, on ne peut
   * que la supprimer si elle est terminée
   */
  const handleDeleteTask = () =>{
    emit("task-delete", props.id)
  }

  </script>
  <template>
    <div class="border flex flex-col text-foreground-primary border-gray-300 shadow p-2 w-full rounded-sm">
      <div class="flex items-center justify-between">
        <h3 :class="['font-bold', 'text-lg', { 'line-through': props.isDone }]">
          {{ props.title }}
        </h3>
        <div class="flex items-center space-x-1.5">
          <button @click.prevent="handleCheckTask"><CheckCircle class="w-5 h-auto active:scale-95 transition transform duration-100"/></button>
          <button v-if="route.name === 'tâches' && !props.isDone" @click.prevent="handleEditTask"><Edit2Icon class="w-5 h-auto active:scale-95 transition transform duration-100"/></button>
          <button v-if="props.isDone" @click.prevent="handleDeleteTask"><Trash2Icon class="w-5 h-auto active:scale-95 transition transform duration-100"/></button>
        </div>
      </div>
        <div class="flex items-center justify-between space-x-5 mt-1">
          <details class="w-52 text-sm text-foreground-primary">
            <summary class="cursor-pointer select-none">Description</summary>
            <p class="mt-1 max-w-xs truncate text-ellipsis overflow-hidden whitespace-nowrap">
              {{ props.desc }}
            </p>
          </details>
        <p class="text-sm text-gray-500">{{ props.dueDate }}</p>
      </div>
    </div>
  </template>
