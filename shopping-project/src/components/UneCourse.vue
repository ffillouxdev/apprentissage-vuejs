<script setup lang="ts">
import type { CourseModel } from '@/models/CourseModel';

    const {itemProps} = defineProps<{ itemProps : CourseModel }>();

    const emit = defineEmits<{
        'modifier': [ id : number],
        'supprimer': [ id : number]
    }>();


    function deleteElement(): void{
        // listec.value = listec.value.filter((elt) =>elt.id !== id);
        emit('supprimer', itemProps.id);
    }

    function updateElement() : void{
        emit('modifier', itemProps.id);
    }

</script>
<template>
    <div class="course">
        <div class="description">
            <span :class="{urgent : itemProps.urgent}">{{ itemProps.name }} </span>
            <strong v-if="itemProps.urgent"> (urgent)</strong>
        <button @click="updateElement">Modifier</button>
        <button @click="deleteElement">Supprimer</button>
        </div>
    </div>
</template>
<style scoped>
    .course{
        display: flex;
        gap: 0.2rem;
    }
</style>