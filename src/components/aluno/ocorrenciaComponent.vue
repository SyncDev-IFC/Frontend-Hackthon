<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    ocorrencias : {
        type: Array,
        required: true}
    })
</script>
<template>
    <div v-for="ocorrencia in ocorrencias" :key="ocorrencia"> 
    <div class="inputBox">
        <div class="text-area">{{ocorrencia.conteudo}}</div>
        <div>
            <p>{{ ocorrencia.data_criacao }}</p>
        </div>
        <div class="ver-mais">ver mais</div>
    </div>
    </div>

</template>
<style scoped>


</style>
