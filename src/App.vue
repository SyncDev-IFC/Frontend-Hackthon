<script setup>
  import {cardTurma} from '@/components'

const turmas = [
  { id: 0, turma: '3info1', materia: 'matematica', cor: 'green', image: 'src/assets/chapeu.png'},
  { id: 1, turma: '3info2', materia: 'matematica', cor: 'blue' },
  { id: 2, turma: '3info3', materia: 'matematica', cor: 'red' },
  { id: 3, turma: '2agro1', materia: 'matematica', cor: 'yellow' },
  { id: 4, turma: '1quimi', materia: 'matematica', cor: 'grey' },
  { id: 5, turma: '3quimi', materia: 'matematica', cor: 'purple' }
]
</script>

<template>
    <router-view/>
    <cardTurma 
    v-for="turma in turmas"
    :key="turma.id"
    :materia="turma.materia"
    :turma="turma.turma"
    :cor="turma.cor"
    :image="turma.image"
/>
</template>


