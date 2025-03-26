<script setup lang="ts">
import useDestinationStore from '@/stores/DestinationDtore';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const isOpen = ref(false);
const store = useDestinationStore();
</script>

<template>
  <nav>
    <ul class="for-destock-nav hidden md:flex flex-row space-x-4">
        <li><RouterLink :class="{'font-bold': $route.name === 'home'}"  :to="{name : 'home'}">Destination</RouterLink></li>
        <li><RouterLink v-if="store.favorite" :class="{'font-bold': $route.name === 'preferences'}"  :to="{name : 'preferences'}">Préférences</RouterLink></li>
        <li><RouterLink  :class="{'font-bold': $route.name === 'destination'}"   :to="{name : 'destination', params : { id: '3'}}">Hawaii, my favorite</RouterLink></li>   
        <li><RouterLink  :class="{'font-bold': $route.name === 'about'}"   :to="{name : 'about'}">About</RouterLink></li>   
        <li><a href="https://vueschool.io" target="_blank" rel="noopener noreferrer">Vue School</a></li>
    </ul>
    <button @click="isOpen = !isOpen" class="md:hidden text-black text-3xl">
      ☰
    </button>
    <ul v-if="isOpen" class="for-mobile-nav w-full space-x-4">
        <li><RouterLink :class="{'font-bold': $route.name === 'home'}" :to="{name : 'home'}">Holiday Project</RouterLink></li>
        <li><RouterLink v-if="store.favorite" :class="{'font-bold': $route.name === 'preferences'}"  :to="{name : 'preferences'}">Préférences</RouterLink></li>
        <li><RouterLink :class="{'font-bold': $route.name === 'about'}"   :to="{name : 'about'}">About</RouterLink></li>
        <li><a href="https://vueschool.io" target="_blank" rel="noopener noreferrer">Vue School</a></li>
    </ul>
  </nav>
</template>

<style scoped>
</style>
