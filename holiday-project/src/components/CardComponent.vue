<script setup lang="ts">
const urlBase =  "/my-beautiful-vue-app/vacances/images/";

const {name, image} = defineProps<{ 
    id : string,
    name : string, 
    image:string}>();
</script>

<template>
    <RouterLink :to="{ name : 'destination', params : { id: id}}" class="card">
        <h2>{{ name }}</h2>
        <img :src="`${urlBase}${image}`" :alt="`Image principale de ${name}`" class="">
    </RouterLink>
</template>
<style scoped>
</style>
