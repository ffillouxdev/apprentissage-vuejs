<script setup lang="ts">
import ArticleComponent from '@/components/ArticleComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
import type { ArticleModel } from '@/models/ArticleModel'
import { useBlogService } from '@/services/api'
import { ref, watchEffect } from 'vue'
const blogService = useBlogService()

const tabArticles = ref<ArticleModel[] | null>(null)
const nb_articles = ref()

const fetchArticles = async (searchString: string = "") => {
  try {
    const response = await blogService.getTabArticles(searchString);
    tabArticles.value = response
    // console.log(response);
    nb_articles.value = tabArticles.value?.length
  } catch (error) {
    console.error('Erreur lors de la récupération des données', error)
  }
}
watchEffect(() => {
  fetchArticles()
})

</script>

<template>
  <div class="home flex items-center flex-col space-y-8 justify-center">
    <h2 class="text-center text-xl font-serif font-bold">Les articles du blog éphémère</h2>
    <FormComponent @search="fetchArticles" />
    <RouterLink :to="{ name: 'add-article' }" class="add-article text-fuchsia-800 hover:underline">
      AJout d'un article
    </RouterLink>
    <p class="text-center mb-3">{{ nb_articles }} articles trouvé(s)</p>
    <div
      v-if="tabArticles"
      class="liste-articles max-h-[200px] overflow-y-auto border bg-gray-100 p-2"
    >
      <ArticleComponent v-for="item in tabArticles" v-bind="item" :key="item.code" />
    </div>
    <p class="h-[200px]" v-else>Il n'y a aucun articles...</p>
  </div>
</template>
<style scoped></style>
