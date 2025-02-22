<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const props = defineProps<{ how_many_times: number; sentence: string }>();

const numbersFields = ref();
const sentencesFields = ref();

function addElement(index: number): void {
    if (!numbersFields.value || !sentencesFields.value) return;

    if (index === 0){
        numbersFields.value.innerHTML = "";
        sentencesFields.value.innerHTML = "";
    }
    
    const liNumber = document.createElement("li");
    const liSentence = document.createElement("li");

    if (index === 1 || index % 5 === 0) {
        liNumber.textContent = index.toString();
    } else {
        liNumber.textContent = "2";
        liNumber.classList.add("text-transparent");
    }

    liSentence.textContent = props.sentence;

    numbersFields.value.appendChild(liNumber);
    sentencesFields.value.appendChild(liSentence);

    if (index === props.how_many_times -1) {
        emit("finish", true);
    }
}

const emit = defineEmits<{
    'finish': [ generation_finish : boolean ],
}>();

for (let i = 0; i < props.how_many_times; i++) {
    setTimeout(() => {
        addElement(i + 1);
    }, 1000 * i);
}
</script>

<template>
  <div class="punition-sentences-loop-field flex mt-2 border min-h-[50vh] h-full w-full p-1">
    <ul ref="numbersFields" class="numbers-fields w-8"></ul>   
    <ul ref="sentencesFields" class="sentences-fields w-full"></ul>
  </div>
</template>
