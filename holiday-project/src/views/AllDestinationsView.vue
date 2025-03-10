<script setup lang="ts">
import sourceData from "@/assets/data.json";
import type { DestinationModel } from '@/models/destinationModel';
import CardComponent from '@/components/CardComponent.vue';

const tabDestinations: DestinationModel[] = sourceData.destinations;


</script>
<template>
    <h1 class="font-bold text-2xl">All destinations</h1>
    <div class="destinations flex-col md:flex-row my-10 flex space-x-4 items-center justify-center w-full">
        <CardComponent v-for="item in tabDestinations" :image="item.image" :name="item.name"/>
    </div>
</template>
<style scoped>
</style>