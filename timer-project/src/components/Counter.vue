<script setup lang="ts">
import type { CounterModel } from '@/models/CounterModel';
import { computed, ref } from 'vue';
    
    const props = defineProps<CounterModel>();

    const c = ref<number>(props.debut);
    
    const joliC = computed(()=>{
        const secondes = c.value %60;
        const minutes = Math.floor(c.value / 60);
        return `${minutes} minutes et ${secondes} secondes`;
    });
    setInterval(()=>{
        c.value++;
    }, 1000);

    // partie bouton
    const boutonDesactive = ref(true);

    setTimeout(()=>{
        boutonDesactive.value =false;
    }, 6000);

    function reset() : void {
        c.value = 0;
    }

    const texteBoutonClique = ref();
    function listener(e : Event){
        const element = e.target as HTMLElement;
        if (element.tagName === "BUTTON"){
            texteBoutonClique.value = element.textContent;
        } 
    }
</script>

<template>
    <div class="counter" @click="listener">
        <p v-show="c<=5">Bienvenue (v-show)</p>
        <p v-if="c<=5">Bienvenue (v-if)</p>
        <p v-else-if="c<=9">Le temps passe...</p>
        <p v-else>encore du temps passé...</p>
        <p v-if="mode === 'joli'">cad {{ joliC }}</p>
        <p v-else>temps écoulé : {{ c }} secondes.</p>
        <button :disabled="boutonDesactive" @click="reset">Recommencer</button>
        <button :disabled="boutonDesactive">Test</button>
        <p>Vous avez cliqué sur {{  texteBoutonClique }}</p>
    </div>
    
</template>