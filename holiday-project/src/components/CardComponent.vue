<script setup lang="ts">
const urlBase =  "/my-beautiful-vue-app/vacances/images/";

const {name, image} = defineProps<{ 
    name : string, 
    image:string}>();
</script>

<template>
    <div class="card">
        <h2>{{ name }}</h2>
        <img :src="`${urlBase}${image}`" :alt="`Image principale de ${name}`" class="">
    </div>
</template>
<style scoped>
</style>
