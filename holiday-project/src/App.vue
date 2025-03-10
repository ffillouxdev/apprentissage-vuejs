<script setup lang="ts">
import NavComponent from './components/NavComponent.vue';

</script>

<template>
      <header class="w-full flex space-x-10 items-center bg-cyan-50 p-5">
        <NavComponent/>
      </header>
      <main class="min-h-screen p-12 h-auto w-full">
        <RouterView />
      </main>
</template>
<style scoped>

</style>
