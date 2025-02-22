<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';

const {how_many_times, sentence} = defineProps<{ how_many_times: number; sentence: string }>();
const visibleCount = ref(0); 

onMounted(() => {
    console.log(how_many_times, sentence)
    for (let i = 1; i <= how_many_times; i++) {
        setTimeout(() => {
            visibleCount.value++;
        }, i * 500);
    }
});
</script>

<template>
 <div class="punition-sentences-loop-field flex mt-2 border min-h-[50vh] h-full w-full p-1">
    <ul class="numbers-fields w-8">
        <li v-for="index in visibleCount" :key="index">
            <p v-if="index === 1">1</p>
            <p v-else-if="index % 5 == 0">{{ index }}</p>
            <p class="text-transparent" v-else>2</p>
        </li>
    </ul>   
    <ul class="sentence-fields w-full">
        <li v-for="index in visibleCount" :key="index">
            {{ sentence }}
        </li>
    </ul>
</div>
</template>
