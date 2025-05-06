<script setup lang="ts">
/**
 * route (/a-propos)
 * Vue qui déclare toutes les technos, les choix réalises.
 */

import { Github } from 'lucide-vue-next';

</script>

<template>
  <section class="">
    <h1 class="text-3xl font-bold">À propos du projet</h1>
    <p class="text-base text-foreground-secondary mb-12">
      Ce projet a été conçu pour un test technique.
    </p>

    <div class="flex flex-col space-y-6">
      <div>
        <h2 class="font-bold text-xl">🎯 Les priorités</h2>
        <ul class="list-disc list-inside text-base text-foreground-secondary mt-2">
          <li>Technologie uniquement frontend</li>
          <li>Accessibilité et belle UX</li>
        </ul>
      </div>

      <div>
        <h2 class="font-bold text-xl">🛠️ Technologies utilisées</h2>
        <ul class="list-disc list-inside text-base text-foreground-secondary mt-2">
          <li>Vue 3</li>
          <li>TypeScript</li>
          <li>Tailwind CSS pour le style</li>
          <li>Lucide pour la palette d'icons</li>
        </ul>
      </div>

      <div>
        <h2 class="font-bold text-xl">📦 Dépendances principales</h2>
        <ul class="list-disc list-inside text-base text-foreground-secondary mt-2">
          <li>Vue Router</li>
          <li>Lucide Icons</li>
          <li>Pinia (gestion d’état)</li>
        </ul>
      </div>

      <div>
        <h2 class="font-bold text-xl">🙌 Crédits & inspiration</h2>
        <p class="text-base text-foreground-secondary mt-2">
          Ce projet s'inspire du style de composants shadcn-ui.
        </p>
      </div>

      <div>
        <h2 class="font-bold text-xl">📄 Licence</h2>
        <p class="text-base text-foreground-secondary mt-2">
          MIT — Libre d’être utilisé, modifié et distribué avec attribution.
        </p>
        <a href="https://github.com/ffillouxdev/tactic-todo" target="_blank" class="flex items-center underline ">Lien du repository github <Github class="w-5 h-auto ml-1"/></a>
      </div>
    </div>
  </section>
</template>
