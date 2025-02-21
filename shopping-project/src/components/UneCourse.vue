<script setup lang="ts">
    import type { CourseModel } from '@/models/CourseModel';
    import { ref } from 'vue';

    const {itemProps} = defineProps<{ itemProps : CourseModel }>();
    const localItem = ref(itemProps)
    const setModif = ref(false);

    const emit = defineEmits<{
        'modifier': [ id : number, value : string],
        'supprimer': [ id : number]
    }>();

    function deleteElement(): void{
        setModif.value = false;
        emit('supprimer', itemProps.id);
    }

    function updateCourse() : void{
        setModif.value = true;
    }

    function updateElement(): void {
        emit('modifier', itemProps.id, localItem.value.name);
        itemProps.urgent = localItem.value.urgent; 
        setModif.value = false; 
    }
</script>
<template>
    <div class="course">
        <div  v-if="!setModif" class="description">
            <span :class="{urgent : itemProps.urgent}">{{ itemProps.name }} </span>
            <strong v-if="itemProps.urgent"> (urgent)</strong>
        <button @click="updateCourse">Modifier</button>
        <button @click="deleteElement">Supprimer</button>
    </div>
    <form v-if="setModif" class="modify-container" @submit="updateElement">
        <input type="text" v-model="localItem.name" name="">
        <input type="checkbox" v-model="localItem.urgent">
        <button type="submit">Sauver</button>
        <button @click.prevent="deleteElement">Supprimer</button>
    </form>
    </div>
</template>
<style scoped>
    .course{
        display: flex;
        gap: 0.2rem;
    }
</style>