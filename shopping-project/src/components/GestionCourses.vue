<script setup lang="ts">
const listec = [
  {id:1, name:"navets"},
  {id:2, name:"kiwi"},
  {id:3, name:"radis"},  
]
</script>
<template>
    <div class="gestionnaire">
        <ul>
            <li v-for="item in listec" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>