<script setup>
import { cardTurma } from '@/components'

const turmas = [
  { id: 0, turma: '3info1', materia: 'Português', cor: '#00E88F', image: 'src/assets/chapeu.png'},
  { id: 1, turma: '3info2', materia: 'Português', cor: '#FFC968', image: 'src/assets/livros.png'},
  { id: 2, turma: '3info3', materia: 'Português', cor: '#EE7F00',  image: 'src/assets/cadernos.png' },
  { id: 3, turma: '3quimi', materia: 'Português', cor: '#EE7F00', image: 'src/assets/cadernoquimica.png' },
]
</script>

<template>
    <h2>Bem Vindo, Professor</h2>
    <h3>É um prazer!</h3>
  <cardTurma
    v-for="turma in turmas"
    :key="turma.id"
    :materia="turma.materia"
    :turma="turma.turma"
    :cor="turma.cor"
    :image="turma.image"
  />
</template>

<style scoped>


</style>




