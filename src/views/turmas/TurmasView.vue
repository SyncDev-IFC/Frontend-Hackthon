<script setup>
import { cardTurma, CardHeader, FooterComponent} from '@/components'
import { useTurmaStore } from '@/stores'
import { onMounted } from 'vue'

const turmasStore = useTurmaStore()

onMounted(() => {
  turmasStore.getTurmas()

})

const turmas = [
  { id: 0, turma: '3info1', materia: 'Português', cor: '#00E88F', image: 'src/assets/chapeu.png'},
  { id: 1, turma: '3info2', materia: 'Português', cor: '#FFC968', image: 'src/assets/livros.png'},
  { id: 2, turma: '3info3', materia: 'Português', cor: '#EE7F00',  image: 'src/assets/cadernos.png' },
  { id: 3, turma: '3quimi', materia: 'Português', cor: '#EE7F00', image: 'src/assets/cadernoquimica.png' },
]


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
    :cor="turma.curso?.cor || '#00000'"
    :image="turma?.image || 'src/assets/chapeu.png'"
    :id="turma.id"
  />
  <cardTurma v-for="turma in turmas" :key="turma.id" :materia="turma.materia" :turma="turma.turma" :cor="turma.cor" :image="turma.image"
  ></cardTurma>
  
  <FooterComponent/>
</template>


<style scoped>
h2, h3{
  font-weight: 500;
}
.apresentacao {
    max-width: 1400px;
    margin: 0 auto;    
    padding: 0 16px;   
}


</style>




