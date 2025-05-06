<script setup lang="ts">
/**
 * route (*)
 * Vue lorsque l'user met une route qui n'existe pas.
 * dans le router
 */

</script>

<template>
  <div class="h-full flex flex-col items-center justify-center text-foreground-primary">
    <h1 class="text-9xl font-extrabold tracking-widest">404</h1>
    <div class="bg-black text-white border border-white mt-5 px-2 text-sm rounded rotate-12 absolute">
      Page non trouvée
    </div>
    <p class="text-xl text-foreground-secondary mt-6">Oups ! La page que vous cherchez n'existe pas.</p>
    <RouterLink :to="{name: 'dashboard'}" class="bg-black mt-3 py-2 px-3  rounded-md flex items-center justify-center text-white text-sm active:scale-95 transition transform duration-100">
      Retour à l'accueil
    </RouterLink>
  </div>
</template>

<style scoped>
</style>
