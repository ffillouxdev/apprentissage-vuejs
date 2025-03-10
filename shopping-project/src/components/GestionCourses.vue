<script setup lang="ts">
import type { CourseModel } from '@/models/CourseModel';
import { ref } from 'vue';
import UneCourse from './UneCourse.vue';

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
  }else{

  }
  nouveauNom.value = "";
  nouveauUrgent.value = false;
}

function emptyList(): void{
  listec.value = [];
}

function deleteEle(id : number) : void{
  console.log("deleteEle id", id);
  listec.value = listec.value.filter((elt) =>elt.id !== id);
  console.log(listec.value);
}

function updateEle(id : number, name : string) : void{
  console.log("updateEle id:", id, "new name:", name);
  let trouve =  false;
  for(let i =0; i < listec.value.length && !trouve ; i++){
    if (id === listec.value[i].id){
      listec.value[i].name = name;  
      trouve = true;
    }
  }
  console.log(listec.value);
}
/*  

*/
</script>

<template>
  <div class="gestionnaire">
    <div class="ajouter-article">
      <h2>Ajouter un article:</h2>
    <form>
      <div>
        <label>
          Nouvel article:
          <input v-model.trim="nouveauNom" />
        </label>
        <label>
          <input type="checkbox" v-model="nouveauUrgent" name="urgent" id="urgentCheckbox" />
          urgent
        </label>
      </div>
      <p>Vous souhaitez ajouter : {{ nouveauNom }} <strong v-if="nouveauUrgent">(urgent)</strong></p>
      <button @click.prevent="addProduct" :disabled="nouveauNom===''" id="add-button">Ajouter</button>
    </form>
    </div>
    <div class="liste-des-courses">
      <h2>La liste de mes courses</h2>
      <button @click="emptyList">Vider ma liste de courses</button>
      <ul>
        <li v-for="item in listec" :key="item.id">
          <UneCourse 
          :itemProps="item"
          @supprimer="deleteEle"
          @modifier="updateEle"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.gestionnaire{
  width: 70%;
}

.urgent {
    background-color: yellow;
}

.ajouter-article {
  border: 1px black dashed;
  padding: 10px;
  border-radius: 5px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#add-button {
    margin-top: 10px;
}

.liste-des-courses{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:10px;
  border: 1px black solid;
  margin-top: 10px;
}
</style>