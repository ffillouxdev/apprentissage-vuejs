<template>
    <div class="404 flex items-center justify-center flex-col h-full space-y-10 min-h-[92vh]">
      <h1 class="font-bold text-7xl">Tu n'as rien a faire ici</h1>
      <p class="font-semibold text-xl">iIl n'y a rien pour toi ici.</p>
      <RouterLink class="px-7 py-4 bg-black text-white" :to="{name: 'home'}">Retourne dans ta cuisine</RouterLink>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  