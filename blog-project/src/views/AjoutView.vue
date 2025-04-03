<script setup lang="ts">
import type { ArticleModel } from '@/models/ArticleModel'
import { useBlogService } from '@/services/api'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const v_body = ref();
const v_title = ref();  
const blogService = useBlogService();
const enCoursFini = ref(false);
const aClique = ref(false);
const router = useRouter();

const addMyArticle = async (event: Event) => {
  event.preventDefault()
  try {
    aClique.value = true
    if (enCoursFini.value) enCoursFini.value = false;

    const article: ArticleModel = {
      title: v_title.value,
      body: v_body.value,
      date: '',
    }
    //console.log('Nouvel article ajouté :', article);
    blogService.addArticle(article)

    setTimeout(() => {
      enCoursFini.value = true
      aClique.value = false
      router.push('/')
    }, 2000)
  } catch (error) {
    console.error("Erreur lors de l'ajout de votre article:", error)
  }
}
</script>
<template>
  <h2 class="text-center text-xl font-serif font-bold">Ajouter un article</h2>
  <form class="flex items-center flex-col justify-center space-y-3">
    <div class="input-group space-y-1 flex-col flex items-center">
      <input
        class="border py-1 pl-2 border-gray-300 ring-1 ring-fuchsia-950 rounded-lg hover:border-gray-400"
        type="text"
        name="title"
        v-model="v_title"
        id="title-input"
        placeholder="Entez votre titre"
      />
    </div>
    <div class="input-group space-y-1 flex-col flex items-center">
      <textarea
        class="border py-1 resize-none px-5 border-gray-300 ring-1 ring-fuchsia-950 rounded-lg hover:border-gray-400"
        name="body"
        id="body-input"
        v-model="v_body"
        placeholder="Entrez votre texte."
      />
    </div>
    <RouterLink :to="{ name: 'home' }" class="add-article text-fuchsia-800 hover:underline">
      Retour
    </RouterLink>
    <button
      @click="addMyArticle"
      class="bg-fuchsia-950 w-full text-white p-1.5 rounded-lg hover:scale-105 transition"
    >
      Ajouter
    </button>
  </form>
  <p v-if="!enCoursFini && aClique">En cours...</p>
</template>
<style scoped></style>
