<script setup lang="ts">
import sourceData from "@/assets/data.json";
import type { DestinationModel } from '@/models/destinationModel';
import CardComponent from '@/components/CardComponent.vue';
import {ref, watchEffect} from "vue";
import { getDestinations } from "@/service/api";

// const tabDestinations: DestinationModel[] = sourceData.destinations;

const tabDestinations = ref<DestinationModel[] | null>(null);
const fetchDestinations = async () =>{
    try {
        const response = await getDestinations();
        tabDestinations.value = response;
    } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
    }
}
watchEffect(()=>{
    fetchDestinations();
});

</script>
<template>
    <h1 class="font-bold text-2xl">All destinations</h1>
    <div v-if="tabDestinations !== null" class="destinations flex-col md:flex-row my-10 flex space-x-4 items-center justify-center w-full">
        <CardComponent v-for="item in tabDestinations" :image="item.image" :name="item.name" :id="item.id"/>
    </div>
    <div v-else class="destinations flex-col md:flex-row my-10 flex space-x-4 items-center justify-center w-full">
        <p>Il n'y rien ici</p>
    </div>
</template>
<style scoped>
</style>