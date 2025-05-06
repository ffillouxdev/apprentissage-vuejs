<script setup lang="ts">
/**
 * Composant qui permet d'avoir une bar sur la gauche pour la navigation
 * et l'ajout de tâche. elle est statique en format ordi et permer d'être
 * ouverte ou fermer en format mobile
 */
import { Info, LayoutDashboard, Menu, SquareCheckBig, X } from 'lucide-vue-next';
import { useRoute } from 'vue-router';
import BlackButtonComponent from './BlackButtonComponent.vue';
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
const route = useRoute();
const emit = defineEmits<{
  (e: 'openModal'): void;
}>();

/**
 * Fonction qui permet de fermer ou ouvrir la sidebar
 */
function toggleMobileMenu() : void {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

/**
 * Fonction qui permet d'ouvrir le composant modal
 * en faisant remonter le signal au composant parent.
 */
function handleOpenModal(): void {
  emit('openModal');
}
</script>

<template>
  <!--Button qui permet de fermer la sidebar en format mobile uniquement-->
  <button
    @click="toggleMobileMenu"
    class="block md:hidden absolute top-2 left-2 z-50"
    aria-label="Ouvrir le menu mobile"
  >
    <Menu class="w-6 h-auto"/>
  </button>

  <!--Composant sidebar en format ordinateur-->
  <aside class="destock-sidebar md:w-70 hidden md:flex flex-col space-y-5 p-2 bg-secondary h-screen shadow-md">
    <div class="flex items-center space-x-5">
      <img src="../../assets/images/logos/logo-tactic-todo-list.svg" class="w-12 h-12" alt="Logo">
      <h2 class="text-lg font-semibold">TacticTodo</h2>
    </div>
    <BlackButtonComponent text="Ajouter une tâche" @click.prevent="handleOpenModal" />
    <nav>
      <ul class="for-destock-nav flex flex-col text-sm">
        <li :class="{ 'font-bold': route.name === 'dashboard' }" class="hover:bg-gray-100 rounded-sm py-2">
          <RouterLink class="flex items-center" :to="{ name: 'dashboard' }">
            <LayoutDashboard class="w-5 h-auto" />
            <span class="ml-1">Dashboard</span>
          </RouterLink>
        </li>
        <li :class="{ 'font-bold': route.name === 'tâches' }" class="hover:bg-gray-100 rounded-sm py-2">
          <RouterLink class="flex items-center" :to="{ name: 'tâches' }">
            <SquareCheckBig class="w-5 h-auto" />
            <span class="ml-1">Tâches</span>
          </RouterLink>
        </li>
        <li :class="{ 'font-bold': route.name === 'a-propos' }" class="hover:bg-gray-100 rounded-sm py-2">
          <RouterLink class="flex items-center" :to="{ name: 'a-propos' }">
            <Info class="w-5 h-auto" />
            <span class="ml-1">A propos</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>

  <!--Composant sidebar en format mobile-->
  <Transition name="slide" class="block md:hidden">
    <aside v-if="isMobileMenuOpen" class="mobile-navbar slide fixed top-0 left-0 z-50 w-64 h-full bg-secondary shadow-lg p-4 space-y-6 md:hidden">
      <div class="flex items-center justify-between space-x-5">
        <div class="flex items-center space-x-3">
          <img src="../../assets/images/logos/logo-tactic-todo-list.svg" class="w-12 h-12" alt="Logo">
          <h2 class="text-lg font-semibold">TacticTodo</h2>
        </div>
        <button class="block md:hidden" @click.prevent="toggleMobileMenu" aria-label="Fermer le menu mobile">
          <X />
        </button>
      </div>
      <BlackButtonComponent text="Ajouter une tâche" @click.prevent="() => { handleOpenModal(); toggleMobileMenu(); }" />
      <nav>
        <ul class="for-destock-nav flex flex-col text-sm">
          <li :class="{ 'font-bold': route.name === 'dashboard' }" class="hover:bg-gray-100 rounded-sm py-2">
            <RouterLink class="flex items-center" :to="{ name: 'dashboard' }" @click="toggleMobileMenu">
              <LayoutDashboard class="w-5 h-auto" />
              <span class="ml-1">Dashboard</span>
            </RouterLink>
          </li>
          <li :class="{ 'font-bold': route.name === 'tâches' }" class="hover:bg-gray-100 rounded-sm py-2">
            <RouterLink class="flex items-center" :to="{ name: 'tâches' }" @click="toggleMobileMenu">
              <SquareCheckBig class="w-5 h-auto" />
              <span class="ml-1">Tâches</span>
            </RouterLink>
          </li>
          <li :class="{ 'font-bold': route.name === 'a-propos' }" class="hover:bg-gray-100 rounded-sm py-2">
            <RouterLink class="flex items-center" :to="{ name: 'a-propos' }" @click="toggleMobileMenu">
              <Info class="w-5 h-auto" />
              <span class="ml-1">A propos</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </aside>
  </Transition>

</template>
