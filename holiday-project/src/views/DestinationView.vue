<script setup lang="ts">
import type { DestinationModel } from '@/models/destinationModel';
import { getDestinationById } from '@/service/api';
import {  ref, watchEffect } from 'vue';
import DescriptionView from './destination/DescriptionView.vue';
import ExperiencesView from './destination/ExperiencesView.vue';
const urlBase =  "/my-beautiful-vue-app/vacances/images/";

const { id } = defineProps<({
    id: string,
})>()

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
            <div class="flex items-center md:items-start justify-content space-x-5 flex-col md:flex-row">
                <img 
                    v-if="specificDestination.image" 
                    class="border-4 border-gray-300" 
                    :src="`${urlBase}/${specificDestination.image}`" 
                    :alt="`image de ${specificDestination.name}`"
                >
                <section class="destination-information">
                    <nav>
                        <ul class="flex items-center justify-start space-x-3 py-3">
                            <li class="hover:underline">
                                <RouterLink :to="{name : 'description'}" class="focus:font-bold">
                                    Description
                                </RouterLink>
                            </li>
                            <li class="hover:underline"> 
                                <RouterLink :to="{name : 'experiences'}" class="focus:font-bold">
                                    Expériences
                                </RouterLink>
                            </li>
                        </ul>
                        <hr class="pb-2"/>
                    </nav>
                    <RouterView :destination="specificDestination"></RouterView>
                    <!--<DescriptionView :destination="specificDestination"/>
                    <ExperiencesView :destination="specificDestination"/>-->
                </section>
            </div>
        </div>
        <div v-else class="flex-col items-start flex justify-center space-y-10">
            <p>Chargement des données...</p>
        </div>
</div>
</template>
<style scoped>

</style>