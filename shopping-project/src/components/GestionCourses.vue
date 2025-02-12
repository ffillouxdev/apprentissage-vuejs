<script setup lang="ts">
import type { CourseModel } from '@/models/CourseModel';
import { ref } from 'vue';

const listec = ref<CourseModel[]>([
  { id: 1, name: "navets", urgent: false },
  { id: 2, name: "kiwi", urgent: false},
  { id: 3, name: "radis", urgent: false},
]);


const nouveauNom = ref("");
const nouveauUrgent = ref(false);
let nextId:number = 3;

function addProduct(): void {
  if (nouveauNom.value.trim() !== "") {
    nextId++;
    listec.value.push({
        id:(nextId), 
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
    <form>
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
      <button @click.prevent="addProduct" id="add-button">Ajouter</button>
    </form>
    <ul>
      <li v-for="item in listec" key="item.id">
        <span :class="{urgent : item.urgent}">{{ item.name }} </span>
        <strong v-if="item.urgent"> (urgent) </strong>
        <em> (l'id unique est {{ item.id }})</em>
      </li>
    </ul>
  </div>
</template>
<style scoped>

.urgent {
    background-color: yellow;
}


form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#add-button {
    margin-top: 10px;
}

</style>

<!-- <li v-for="item in listec" :key="item.id">
  <span :class="{ urgent: item.urgent }">{{ item.name}}</span>
  <strong v-if="item.urgent">{{" "}} (urgent) {{" "}}</strong>
  <em>(l'identifiant unique est {{ item.id }})</em>
</li> -->