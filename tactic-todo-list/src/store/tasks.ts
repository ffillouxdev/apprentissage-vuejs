import { ref  } from 'vue'
import { defineStore } from 'pinia'
import type { TaskModel } from '@/models/TaskModel';

/**
 * Store pinia qui permet de gérer dans un seul
 * fichier toute la gestion local du tableau des tâches
 * de la todo-list
 */
export const useTasksStore = defineStore('tasks', () => {
  const tabTasks = ref<TaskModel[]| null>([]);

  function addStore(task: TaskModel) {
    tabTasks.value?.push(task);
  }

  function getNumberOfTasks(): number{
    return tabTasks.value?.length as number | 0;
  }

  function getNumberOfFinishTasks(): number{
    return tabTasks.value?.filter(task=> task.isDone).length as number | 0;
  }

  function getNumberOfTasksToDo(): number{
    return tabTasks.value?.filter(task=> !task.isDone).length as number | 0;
  }

  function getTaskFinishRate(): number {
    const total = getNumberOfTasks();
    const finishs = getNumberOfFinishTasks();
    if (total === 0) return 0;
    return parseFloat(((finishs / total) * 100).toFixed(2));
  }

  function changePropIsDoneValue(id: number): void {
    if (!tabTasks.value) return;

    for (const task of tabTasks.value){
      if (task.id === id){
        task.isDone = !task.isDone;
      }
    }
  }

  function updateTask(newTask: TaskModel): void {
    if (!tabTasks.value) return;

    const index = tabTasks.value.findIndex(s => s.id === newTask.id);
    if (index !== -1) {
      tabTasks.value[index] = newTask;
    }
  }

  function deleteTask(id: number): void {
    if (!tabTasks.value) return;
    const index = tabTasks.value.findIndex(task => task.id === id);
    if (index !== -1) {
      tabTasks.value.splice(index, 1);
    }
  }

  function getInComingTasks(): TaskModel[] {
    const now = new Date();
    const in7Days = new Date();
    in7Days.setDate(now.getDate() + 7);

    return tabTasks.value?.filter(task => {
      const due = new Date(task.dueDate);
      return due >= now && due <= in7Days && !task.isDone;
    }) ?? [];
  }

  function getRecentTasks(): TaskModel[] {
    if (!tabTasks.value) return [];

    const now = new Date();
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(now.getDate() - 3);

    return tabTasks.value.filter(task => {
      const taskCreateAt = new Date(task.createAt);
      return taskCreateAt >= threeDaysAgo && taskCreateAt <= now;
    });
  }




  return {getRecentTasks, getInComingTasks, getNumberOfTasks, getNumberOfFinishTasks, getNumberOfTasksToDo, addStore, getTaskFinishRate, changePropIsDoneValue,updateTask, deleteTask, tabTasks };
})
