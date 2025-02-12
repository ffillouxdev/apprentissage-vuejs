<script setup lang="ts">
import type { CourseModel } from '@/models/CourseModel';
import { ref } from 'vue';

const listec = ref<CourseModel[]>([
  { id: 1, name: "navets" },
  { id: 2, name: "kiwi" },
  { id: 3, name: "radis" },
]);


const nouveauNom = ref("");
const nouveauUrgent = ref(false);

function addProduct(e: Event): void {
  e.preventDefault();
  if (nouveauNom.value.trim() !== "") {
    
    listec.value.push({
        id:(listec.value.length+1), 
        name: nouveauNom.value,
        urgent: nouveauUrgent.value
        });
  }
  nouveauNom.value = "";
  nouveauUrgent.value = false;
}
</script>

<template>
  <div class="gestionnaire">
    <h2>Ajouter un article:</h2>
    <form @submit="addProduct">
      <div>
        <label>
          Nouvel article:
          <input v-model.lazy.trim="nouveauNom" />
        </label>
        <label>
          <input type="checkbox" v-model="nouveauUrgent" name="urgent" id="urgentCheckbox" />
          urgent
        </label>
      </div>
      <p>Vous souhaitez ajouter : {{ nouveauNom }} <strong v-if="nouveauUrgent">(urgent)</strong></p>
      <button id="add-button" type="submit">Ajouter</button>
    </form>
    <ul>
      <li v-for="item in listec" :key="item.id">
        <span :class="{ urgent: item.urgent }">{{ item.name}}</span>
        <strong v-if="item.urgent">{{" "}} (urgent)</strong>
        <em>(l'identifiant unique est {{ item.id }})</em>
      </li>
    </ul>
  </div>
</template>