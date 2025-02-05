<script setup lang="ts">
    import { computed, ref } from 'vue';

    const counter = ref(0);
    const joliC = computed(()=>{
        const secondes = counter.value %60;
        const minutes = Math.floor(counter.value / 60);
        return `${minutes} minutes et ${secondes} secondes`;
    });
    setInterval(()=>{
        counter.value++;
    }, 1000);
</script>

<template>
    <div class="counter">
        <p>temps écoulé : {{ counter }} secondes.</p>
        <p>cad {{ joliC }}</p>
    </div>
</template>