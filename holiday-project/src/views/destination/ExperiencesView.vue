<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue';
import type { DestinationModel } from '@/models/destinationModel';

const {destination} = defineProps<{
    readonly destination : DestinationModel
}>()
</script>
<template>
    <div class="experiences flex-col md:flex-row flex items-center space-x-3">
        <CardComponent v-for="experience in destination.experiences" :name="experience.name" :image="experience.image" :key="destination.id"/>
    </div>
</template>
<style scoped>
</style>