<script setup>
import { cardTurma, CardHeader, FooterComponent} from '@/components'
import { useTurmaStore } from '@/stores'
import { onMounted } from 'vue'

const turmasStore = useTurmaStore()

onMounted(() => {
  turmasStore.getTurmas()

})


</script>

<template>
  <CardHeader/>
  <div class="apresentacao">
    <h2>Bem Vindo, Professor</h2>
    <h3>É um prazer!</h3>
  </div>

  <!-- Show loading spinner or message if data is still loading -->
  <div v-if="turmasStore.isLoading">Carregando turmas...</div>

  <cardTurma
    v-for="turma in turmasStore.state.turmas"
    :key="turma.id"
    :materia="turma.curso?.nome || 'Curso Desconhecido'"
    :turma="turma.nome"
    :cor="turma.curso?.cor || '#00E88F'"
    :image="turma?.image || 'src/assets/chapeu.png'"
    :id="turma.id"
  />
  
  <FooterComponent/>
</template>


<style scoped>
.apresentacao {
    max-width: 1400px;
    margin: 0 auto;    
    padding: 0 16px;   
}


</style>




