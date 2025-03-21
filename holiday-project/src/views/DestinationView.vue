<script setup lang="ts">
import type { DestinationModel } from '@/models/destinationModel';
import { getDestinationById } from '@/service/api';
import {  ref, watchEffect } from 'vue';
const urlBase =  "/my-beautiful-vue-app/vacances/images/";

const { id } = defineProps<({
    id: string
})>()

console.log(id)

const specificDestination = ref<DestinationModel | null>(null);
const fetchDestination = async () =>{
    try {
        const response = await getDestinationById(id);
        specificDestination.value = response;   
    } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
    }
}
watchEffect(()=> {
    fetchDestination();
});

</script>
<template>
    <div class="destination flex-col h-[92vh] items-center flex justify-center">
    <div v-if="specificDestination" class="destination-details flex-col items-start flex justify-center space-y-10">
            <h2 class="font-bold text-2xl ">
                {{ specificDestination.name }}
            </h2>
            <div class="flex items-center justify-content space-x-5">
                <img 
                    v-if="specificDestination.image" 
                    class="border-4 border-gray-300" 
                    :src="`${urlBase}/${specificDestination.image}`" 
                    :alt="`image de ${specificDestination.name}`"
                >
                <p class="flex-1 max-w-sm">
                    {{ specificDestination.description }}
                </p>
            </div>
        </div>
        <div v-else class="flex-col items-start flex justify-center space-y-10">
            <p>Chargement des données...</p>
        </div>
</div>
</template>
<style noscoped>

</style>