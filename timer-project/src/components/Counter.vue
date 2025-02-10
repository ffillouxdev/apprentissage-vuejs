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

    // partie bouton
    const boutonDesactive = ref(true);

    setTimeout(()=>{
        boutonDesactive.value =false;
    }, 6000);

    function reset() : void {
        counter.value = 0;
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
        <p>temps écoulé : {{ counter }} secondes.</p>
        <p v-show="counter<=5">Bienvenue (v-show)</p>
        <p v-if="counter<=5">Bienvenue (v-if)</p>
        <p v-else-if="counter<=9">Le temps passe...</p>
        <p v-else>encore du temps passé...</p>
        <p>cad {{ joliC }}</p>
        
        <button :disabled="boutonDesactive" @click="reset">Recommencer</button>
        <button :disabled="boutonDesactive">Test</button>
        <p>Vous avez cliqué sur {{  texteBoutonClique }}</p>
    </div>
    
</template>