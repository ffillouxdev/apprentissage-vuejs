<script setup lang="ts">
import type { DestinationModel } from '@/models/destinationModel';
import { getDestinations } from '@/service/api';
import useDestinationStore from '@/stores/DestinationDtore';
import { ref, watchEffect } from 'vue';

const tabDestinations = ref<DestinationModel[] | null>(null);
const store = useDestinationStore();
const fetchDestinationName = async () =>{
    try {
        const response = await getDestinations();
        tabDestinations.value = response;
    } catch (error) {
        console.error("Erreur lors de la récupération", error);
    }
}

// const changePrefs = () =>{
//     let value = 
//     store.setFavorite(value);
// }

watchEffect(()=>{
    fetchDestinationName();
})

</script>
<template>
    <form action="" class="">    
    <fieldset class="flex flex-col md:flex-row md:justify-start justify-center">
        <legend>Votre destination préférée ?</legend>
            <label :class="`${dest.name}-radio-label`" v-for="dest in tabDestinations">
                <input type="radio" name="choixDest" :id="`${dest.name}_radio`">
                <span class="ml-2">{{ dest.name }}</span>
            </label>
    </fieldset>
    <button type="submit" class="py-2 px-3 text-white bg-black">
        Changer les préferences
    </button>
</form>

</template>
<style scoped>
</style>