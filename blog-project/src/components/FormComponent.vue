<script setup lang="ts">
import { ref } from 'vue'

const searchString = ref('')
const emit = defineEmits<{
  search: [value: string]
}>()

const handleSearch = () => {
  emit('search', searchString.value)
}
</script>
<template>
  <div class="" id="recherche">
    <form class="flex items-center flex-col justify-center space-y-3">
      <label for="title">Recherchez dans le titre</label>
      <input
        class="border py-1 pl-2 border-gray-300 ring-1 ring-fuchsia-950 rounded-lg hover:border-gray-400"
        type="text"
        name="title"
        id="title-input"
        v-model="searchString"
      />
      <button
        @click.prevent="handleSearch"
        class="bg-fuchsia-950 w-full text-white p-1.5 rounded-lg hover:scale-105 transition"
      >
        Rechercher
      </button>
    </form>
  </div>
</template>
