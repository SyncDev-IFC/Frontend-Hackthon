<script setup>
import { onMounted } from 'vue';
import { useCursoStore } from "../stores/cursos.js"


const cursoStore = useCursoStore()

onMounted(() => {
  cursoStore.getCursos()
})


</script>
<template>
{{ cursoStore.cursos }}
</template>
<style scoped>
</style>