<script setup lang="ts">
import type { ArticleModel } from '@/models/ArticleModel';


const props = defineProps<ArticleModel>();

</script>
<template>
  <div class="article bg-fuchsia-950 text-white p-2 mt-3 w-64">
    <p id="date">{{ props.date }}</p>
    <details>
      <summary>{{ props.title }}</summary>
      {{ props.body }}
    </details>
  </div>
</template>
