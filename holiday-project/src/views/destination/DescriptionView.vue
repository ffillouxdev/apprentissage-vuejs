<script setup lang="ts">
import type { DestinationModel } from '@/models/destinationModel';


    const {destination} = defineProps<{
        readonly destination : DestinationModel
    }>()

</script>

<template>
         <p class="flex-1 max-w-sm">{{ destination.description }}</p>
</template>

<style scoped>

</style>