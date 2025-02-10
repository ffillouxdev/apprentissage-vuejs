<script setup lang="ts">
import type { CourseModel } from '@/models/CourseModel';
import { ref } from 'vue';

const listec : CourseModel[] = [
  {id:1, name:"navets"},
  {id:2, name:"kiwi"},
  {id:3, name:"radis"},  
]

const nouveauNom = ref("");
//if (nouveauNom.value !== "") listec.push({id:(listec.length+1), name: nouveauNom.value});
const nouveauUrgent = ref(false);

</script>
<template>
    <div class="gestionnaire">
        <ul>
            <li v-for="item in listec" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
        <h2>Ajouter un article:</h2>
        <form action="">
            <label>
                Nouvel article:
                <input v-model.lazy.trim="nouveauNom">
            </label>
            <label for="">
                <input type="checkbox" v-model="nouveauUrgent" name="urgent" id="urgentCheckbox">
            </label>
        </form>
        <p>Vous souhaitez ajouter {{ nouveauNom }} <strong v-if="nouveauUrgent">(urgent)</strong></p>
    </div>
</template>